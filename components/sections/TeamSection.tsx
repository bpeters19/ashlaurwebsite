"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & President",
      image: "/images/team/john-smith.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Operating Officer",
      image: "/images/team/sarah-johnson.jpg"
    },
    {
      name: "Michael Davis",
      position: "VP of Construction",
      image: "/images/team/michael-davis.jpg"
    },
    {
      name: "Emily Chen",
      position: "Director of Engineering",
      image: "/images/team/emily-chen.jpg"
    },
    {
      name: "David Wilson",
      position: "Project Manager",
      image: "/images/team/david-wilson.jpg"
    },
    {
      name: "Lisa Rodriguez",
      position: "Safety Director",
      image: "/images/team/lisa-rodriguez.jpg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Leadership Team</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
            Meet the experienced professionals who drive our commitment to excellence.
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Award className="w-6 h-6" />
            <span className="font-semibold">31 Best Place to Work Awards</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-1">{member.name}</h3>
              <p className="text-muted">{member.position}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-secondary mb-4">Build a Career With Us</h3>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Join our award-winning team and be part of something extraordinary.
          </p>
          <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-md transition duration-300">
            View Career Opportunities
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;