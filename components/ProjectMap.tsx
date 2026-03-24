"use client";

import { useMemo, useState, useEffect, type ComponentType } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";

interface ProjectMapProps {
  height?: string;
}

export default function ProjectMap({ height = "500px" }: ProjectMapProps) {
  return <ProjectMapClient height={height} />;
}

function ProjectMapClient({ height }: { height: string }) {
  const router = useRouter();
  const [MapContainer, setMapContainer] = useState<ComponentType<Record<string, unknown>> | null>(null);
  const [TileLayer, setTileLayer] = useState<ComponentType<Record<string, unknown>> | null>(null);
  const [Marker, setMarker] = useState<ComponentType<Record<string, unknown>> | null>(null);
  const [Popup, setPopup] = useState<ComponentType<Record<string, unknown>> | null>(null);
  const [customIcon, setCustomIcon] = useState<unknown>(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      const leaflet = await import("leaflet");
      const reactLeaflet = await import("react-leaflet");

      setMapContainer(
        () => reactLeaflet.MapContainer as unknown as ComponentType<Record<string, unknown>>
      );
      setTileLayer(() => reactLeaflet.TileLayer as unknown as ComponentType<Record<string, unknown>>);
      setMarker(() => reactLeaflet.Marker as unknown as ComponentType<Record<string, unknown>>);
      setPopup(() => reactLeaflet.Popup as unknown as ComponentType<Record<string, unknown>>);

      const leafletInstance = (leaflet.default ?? leaflet) as {
        icon: (options: {
          iconUrl: string;
          iconSize: [number, number];
          iconAnchor: [number, number];
          popupAnchor: [number, number];
          className: string;
        }) => unknown;
      };

      setCustomIcon(
        leafletInstance.icon({
          iconUrl:
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EA4335'%3E%3Cpath d='M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/%3E%3C/svg%3E",
          iconSize: [32, 40],
          iconAnchor: [16, 40],
          popupAnchor: [0, -40],
          className: "custom-marker",
        })
      );
    };

    loadLeaflet();
  }, []);

  const projectsWithLocation = useMemo(
    () => projects.filter((project) => project.location),
    []
  );

  const center = useMemo(() => {
    if (!projectsWithLocation.length) {
      return [41.8781, -87.6298];
    }
    const avgLat =
      projectsWithLocation.reduce((sum, project) => sum + (project.location?.lat ?? 0), 0) /
      projectsWithLocation.length;
    const avgLng =
      projectsWithLocation.reduce((sum, project) => sum + (project.location?.lng ?? 0), 0) /
      projectsWithLocation.length;
    return [avgLat, avgLng];
  }, [projectsWithLocation]);

  if (!MapContainer || !TileLayer || !Marker || !Popup || !customIcon) {
    return <div style={{ width: "100%", height, backgroundColor: "#f0f0f0" }} />;
  }

  return (
    <div style={{ width: "100%", height, position: "relative", zIndex: 0 }}>
      <MapContainer center={center} zoom={11} style={{ height: "100%", width: "100%" }} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {projectsWithLocation.map((project) => (
          <Marker
            key={project.slug}
            position={[project.location!.lat, project.location!.lng]}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                router.push(`/gallery?openProject=${project.slug}`);
              },
              mouseover: (event: unknown) => {
                const target = (event as { target?: { openPopup?: () => void } }).target;
                target?.openPopup?.();
              },
              mouseout: (event: unknown) => {
                setTimeout(() => {
                  const target = (event as { target?: { closePopup?: () => void } }).target;
                  target?.closePopup?.();
                }, 150);
              },
            }}
          >
            <Popup
              autoClose={false}
              closeButton={false}
              keepInView={true}
            >
              <div style={{ width: "200px" }}>
                <div className="relative w-full h-32 rounded overflow-hidden bg-gray-200 mb-2">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <h4 style={{ margin: "8px 0 4px", fontWeight: 600, fontSize: "14px" }}>
                  {project.title}
                </h4>
                <p style={{ margin: 0, fontSize: "12px", opacity: 0.7 }}>
                  {project.category}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
