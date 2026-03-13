import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "@/data/projects";

const timelinePhases = [
	"preconstruction",
	"permitting",
	"mobilization",
	"in-progress",
	"substantial-completion",
	"complete",
] as const;

export default function UpcomingProjectsPage() {
	const upcomingStatuses = new Set(["preconstruction", "permitting", "mobilization"]);
	const fromTheFieldSlugs = new Set([
		"jtdc-bathroom-renovations",
		"park-forest-indianwood-blackhawk-plaza",
		"cook-county-health-buildings-and-grounds-storage-trailer-site-development",
		"skokie-courthouse-project",
		"ccab-1st-floor-toilet",
	]);
	const upcomingProjects = projects.filter(
		(project) => upcomingStatuses.has(project.status) || fromTheFieldSlugs.has(project.slug)
	);

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main className="pt-20">
				<section className="bg-white border-b border-gray-200 py-8">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Expanding Our Impact</h1>
						<p className="text-lg text-gray-600">A preview of projects currently in preconstruction and mobilization.</p>
					</div>
				</section>

				<section className="py-10">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{upcomingProjects.map((project) => {
								const currentPhaseIndex = timelinePhases.findIndex((phase) => phase === project.status);
								const safePhaseIndex = currentPhaseIndex === -1 ? 0 : currentPhaseIndex;

								return (
									<Link
										key={project.slug}
										href={`/projects/${project.slug}`}
										id={project.slug}
										className="group block overflow-hidden rounded-lg scroll-mt-28"
									>
										<div className="relative aspect-[4/3] w-full">
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
											<div className="absolute bottom-2 left-2 text-white max-w-[78%]">
												<p className="m-0 text-[20px] md:text-[22px] font-semibold tracking-tight leading-[1.15]">{project.title}</p>
												<p className="m-0 mt-0.5 text-[18px] uppercase tracking-[0.1em] text-white/75 leading-none">{project.location.address}</p>

												<div className="relative mt-2 w-36">
													<div className="absolute left-0 right-0 top-1.5 h-px bg-white/30" />
													<div className="relative flex justify-between">
														{timelinePhases.map((phase, index) => {
															const isCompleted = index < safePhaseIndex;
															const isCurrent = index === safePhaseIndex;

															return (
																<span
																	key={phase}
																	className={`h-3 w-3 rounded-full border ${
																		isCurrent
																			? "bg-amber-400 border-amber-300"
																			: isCompleted
																				? "bg-white border-white"
																				: "bg-transparent border-white/40"
																	}`}
																/>
															);
														})}
													</div>
												</div>
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
