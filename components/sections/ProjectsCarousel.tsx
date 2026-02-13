"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, Loader2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsCarousel = () => {
  const projects = [
    {
      name: "Westhaven Park Station – Mixed-Income Apartments",
      description: "12-story mixed-income residential building with 96 apartment units and retail space. Built as part of the redevelopment of the former Henry Horner Homes site.",
      image: "https://picsum.photos/400/300?random=40",
      category: "Residential",
      status: "completed"
    },
    {
      name: "The Foglia Residences – Affordable Housing",
      description: "76 affordable apartments for blind, visually impaired, disabled, and veterans. Nation's first LIHTC building designed for the blind community.",
      image: "https://picsum.photos/400/300?random=41",
      category: "Residential",
      status: "completed"
    },
    {
      name: "Downtown Office Complex",
      description: "Modern 25-story office building with sustainable design features",
      image: "https://picsum.photos/400/300?random=42",
      category: "Commercial",
      status: "ongoing"
    },
    {
      name: "Highway Infrastructure Project",
      description: "Major highway expansion and bridge construction",
      image: "https://picsum.photos/400/300?random=43",
      category: "Infrastructure",
      status: "ongoing"
    },
    {
      name: "Medical Center Expansion",
      description: "State-of-the-art hospital wing with advanced medical facilities",
      image: "https://picsum.photos/400/300?random=44",
      category: "Healthcare",
      status: "upcoming"
    },
    {
      name: "University Campus Development",
      description: "New academic buildings and student housing complex",
      image: "https://picsum.photos/400/300?random=45",
      category: "Education",
      status: "upcoming"
    }
  ];


  const [selectedStatus, setSelectedStatus] = React.useState("completed");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const statusOptions = [
    {
      value: "completed",
      label: "Completed Projects",
      icon: <CheckCircle className="w-5 h-5 text-primary mr-2" />,
      color: "bg-blue-100 text-primary"
    },
    {
      value: "ongoing",
      label: "Ongoing Projects",
      icon: <Loader2 className="w-5 h-5 text-primary animate-spin mr-2" />,
      color: "bg-blue-100 text-primary"
    },
    {
      value: "upcoming",
      label: "Upcoming Projects",
      icon: <Clock className="w-5 h-5 text-secondary mr-2" />,
      color: "bg-blue-50 text-secondary"
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.status === selectedStatus
  );

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Discover our portfolio of award-winning construction projects.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative w-72">
              <button
                className={`w-full flex items-center justify-between px-5 py-3 rounded-xl shadow-lg border border-blue-200 bg-surface text-lg font-semibold transition focus:outline-none ${statusOptions.find(o => o.value === selectedStatus)?.color}`}
                onClick={() => setDropdownOpen((open) => !open)}
                type="button"
              >
                <span className="flex items-center">
                  {statusOptions.find(o => o.value === selectedStatus)?.icon}
                  {statusOptions.find(o => o.value === selectedStatus)?.label}
                </span>
                <svg className={`w-5 h-5 ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 right-0 mt-2 bg-surface border border-blue-200 rounded-xl shadow-xl z-10 overflow-hidden"
                >
                  {statusOptions.map((option) => (
                    <li
                      key={option.value}
                      className={`flex items-center px-5 py-3 cursor-pointer hover:bg-accent text-lg font-medium transition ${option.value === selectedStatus ? option.color + ' font-bold' : ''}`}
                      onClick={() => {
                        setSelectedStatus(option.value);
                        setDropdownOpen(false);
                      }}
                    >
                      {option.icon}
                      {option.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                href="/projects"
                className="group block bg-blue-50 rounded-lg shadow-sm overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden group-hover:brightness-110 transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-700 group-hover:bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{project.name}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300">{project.description}</p>
                  <div className="text-blue-700 group-hover:text-blue-900 font-medium transition-colors duration-300">
                    View Project →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link 
            href="/projects"
            className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            SEE OUR PROJECTS
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;