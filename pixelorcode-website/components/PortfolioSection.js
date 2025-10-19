'use client';

import React, { useState } from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Link from 'next/link';

const categories = ["All", "Corporate Website", "E-commerce", "Web Application", "SaaS Application", "Service Platform", "Product Catalog"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

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
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/case-studies/${project.slug}`}
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
                  <span className="text-emerald-400 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

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