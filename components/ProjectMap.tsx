"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";

interface ProjectMapProps {
  height?: string;
}

export default function ProjectMap({ height = "500px" }: ProjectMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ width: "100%", height, backgroundColor: "#f0f0f0" }} />;
  }

  return <ProjectMapClient height={height} />;
}

function ProjectMapClient({ height }: { height: string }) {
  const router = useRouter();
  const [MapContainer, setMapContainer] = useState<any>(null);
  const [TileLayer, setTileLayer] = useState<any>(null);
  const [Marker, setMarker] = useState<any>(null);
  const [Popup, setPopup] = useState<any>(null);
  const [L, setL] = useState<any>(null);
  const [hoveredProject, setHoveredProject] = useState<any>(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      const leaflet = await import("leaflet");
      const reactLeaflet = await import("react-leaflet");
      
      setL(leaflet.default);
      setMapContainer(() => reactLeaflet.MapContainer);
      setTileLayer(() => reactLeaflet.TileLayer);
      setMarker(() => reactLeaflet.Marker);
      setPopup(() => reactLeaflet.Popup);
    };

    loadLeaflet();
  }, []);

  const center = useMemo(() => {
    if (!projects.length) {
      return [41.8781, -87.6298];
    }
    const avgLat = projects.reduce((sum, p) => sum + p.location.lat, 0) / projects.length;
    const avgLng = projects.reduce((sum, p) => sum + p.location.lng, 0) / projects.length;
    return [avgLat, avgLng];
  }, []);

  const customIcon = useMemo(() => {
    if (!L) return null;
    return L.icon({
      iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EA4335'%3E%3Cpath d='M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/%3E%3C/svg%3E",
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -40],
      className: "custom-marker",
    });
  }, [L]);

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
        {projects.map((project) => (
          <Marker
            key={project.slug}
            position={[project.location.lat, project.location.lng]}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                router.push(`/gallery?openProject=${project.slug}`);
              },
              mouseover: (e: any) => {
                setHoveredProject(project);
                e.target.openPopup();
              },
              mouseout: (e: any) => {
                setTimeout(() => {
                  e.target.closePopup();
                  setHoveredProject(null);
                }, 150);
              },
            }}
          >
            <Popup
              onClose={() => setHoveredProject(null)}
              autoClose={false}
              closeButton={false}
              keepInView={true}
            >
              <div style={{ width: "200px" }}>
                <div className="relative w-full h-32 rounded overflow-hidden bg-gray-200 mb-2">
                  <Image
                    src={project.image}
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
