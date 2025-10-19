'use client';

import React, { useState } from 'react';
import { ExternalLink, Clock, Tag, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Perpetual Power Services",
    category: "Corporate Website",
    image: "/portfolio/project1.png",
    description: "A modern corporate website for a leading renewable energy company with 34+ years of expertise.",
    challenge: "Needed a professional online presence to showcase their solar power, UPS systems, and sustainable energy solutions.",
    solution: "Built a clean, professional website with clear service sections, company history, and contact integration.",
    results: ["Professional brand image", "Clear service showcase", "Mobile-optimized experience"],
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    timeline: "10 days",
    link: "#"
  },
  {
    title: "Rudra Infocom",
    category: "Service Platform",
    image: "/portfolio/project2.png",
    description: "Professional platform for IT and telecommunication solutions provider.",
    challenge: "Required a trustworthy website to highlight complex telecom services including BTS installation and network planning.",
    solution: "Designed a modern, reliable layout emphasizing expertise, services, and client trust factors.",
    results: ["Enhanced credibility", "Clear service breakdown", "Easy contact flow"],
    tech: ["React", "CSS3", "Node.js"],
    timeline: "12 days",
    link: "#"
  },
  {
    title: "Ruvira Atelier",
    category: "E-commerce",
    image: "/portfolio/project3.png",
    description: "Premium website for luxury jewelry brand blending heritage craftsmanship with modern design.",
    challenge: "Capture the elegance of Jaipur-based jewelry while providing seamless digital shopping experience.",
    solution: "Created elegant, refined design with high-quality imagery, collection showcases, and bespoke design consultation.",
    results: ["Premium brand feel", "Increased inquiries", "Better customer engagement"],
    tech: ["Next.js", "Stripe", "Sanity CMS"],
    timeline: "14 days",
    link: "#"
  },
  {
    title: "Meena Play World",
    category: "Product Catalog",
    image: "/portfolio/project4.png",
    description: "Vibrant website for premium playground and fitness equipment provider.",
    challenge: "Showcase diverse product range while emphasizing safety standards and innovation.",
    solution: "Built user-friendly catalog with clear categories, safety information, and easy inquiry system.",
    results: ["Better product visibility", "30% more inquiries", "Faster response time"],
    tech: ["React", "Material UI", "Firebase"],
    timeline: "9 days",
    link: "#"
  },
  {
    title: "Tomato Food Ordering",
    category: "Web Application",
    image: "/portfolio/project5.png",
    description: "Modern food ordering platform with seamless user experience.",
    challenge: "Create intuitive online ordering system with menu browsing and cart functionality.",
    solution: "Developed appetizing UI with smooth ordering flow, category filters, and responsive design.",
    results: ["Smooth ordering process", "Mobile-first design", "Fast load times"],
    tech: ["MERN Stack", "Redux", "Razorpay"],
    timeline: "18 days",
    link: "#"
  },
  {
    title: "CarRental Platform",
    category: "SaaS Application",
    image: "/portfolio/project6.png",
    description: "Sleek luxury car rental platform with booking management system.",
    challenge: "Build complete booking system with location selection, date management, and car inventory.",
    solution: "Created full-stack application with admin dashboard, booking flow, and payment integration.",
    results: ["Complete booking system", "Admin management", "Scalable architecture"],
    tech: ["MERN Stack", "MongoDB", "Stripe"],
    timeline: "21 days",
    link: "#"
  }
];

const categories = ["All", "Corporate Website", "E-commerce", "Web Application", "SaaS Application", "Service Platform", "Product Catalog"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">Our Work</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Projects We're <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Proud Of</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped brands establish their digital presence and drive growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-56 bg-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-slate-700');
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-semibold">{project.category}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    {project.timeline}
                  </div>
                  <button className="text-emerald-400 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Overlay for Project Details */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-slate-900 border-2 border-slate-700 rounded-2xl max-w-3xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="mb-4">
                <span className="text-emerald-400 text-sm font-semibold">{selectedProject.category}</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              
              <p className="text-slate-400 mb-6">{selectedProject.description}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">Challenge</h3>
                  <p className="text-slate-300">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">Solution</h3>
                  <p className="text-slate-300">{selectedProject.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>Completed in {selectedProject.timeline}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Want to see your project here?
          </h3>
          <p className="text-slate-400 mb-6">
            Let's create something amazing together.
          </p>
          <a 
            href="https://wa.me/917404511743?text=Hi!%20I'd%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
}