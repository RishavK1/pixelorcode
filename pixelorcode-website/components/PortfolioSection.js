'use client';

import React, { useState, useRef } from 'react';
import { Clock, Tag, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Link from 'next/link';

const categories = ["All", "Corporate Website", "E-commerce", "Web Application", "SaaS Application", "Service Platform", "Product Catalog"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects = selectedCategory === "All" 
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = 450; // card width + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

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

        {/* Modern Carousel Container */}
        <div className="relative px-4">
          {/* Navigation Buttons - Modern Glass Style */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-slate-800/80 backdrop-blur-xl border border-slate-700 hover:bg-emerald-500 hover:border-emerald-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl group"
          >
            <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:text-slate-950 transition-colors" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-slate-800/80 backdrop-blur-xl border border-slate-700 hover:bg-emerald-500 hover:border-emerald-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl group"
          >
            <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-slate-950 transition-colors" />
          </button>

          {/* Cards Container */}
          <div className="overflow-visible mx-12">
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-8 pt-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-[420px] py-2"
                >
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="group block relative h-[500px] rounded-3xl overflow-hidden border-2 border-slate-700 transition-all duration-500 hover:scale-[1.02]"
                  >
                    {/* Project Image - Full Card */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-slate-700');
                      }}
                    />
                    
                    {/* Gradient Overlay - Bottom to Top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                    
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      {/* Project Title */}
                      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {/* View Case Study Button */}
                      <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:gap-3">
                        View Case Study
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Progress Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/50'
                    : 'w-3 h-3 bg-slate-700 hover:bg-slate-600 hover:scale-125'
                }`}
              />
            ))}
          </div>
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