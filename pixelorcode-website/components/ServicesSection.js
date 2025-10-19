import React from 'react';
import { Code2, Smartphone, Palette, Server, Wrench, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "High-Converting Websites",
    description: "Fast, modern websites that turn visitors into customers. Built with cutting-edge tech for maximum performance and SEO.",
    features: ["Next.js & React", "SEO Optimized", "Mobile-First", "Lightning Fast"],
    color: "emerald"
  },
  {
    icon: Smartphone,
    title: "SaaS & Web Apps",
    description: "Full-stack applications and MVPs that scale with your business. From concept to launch in weeks, not months.",
    features: ["MERN Stack", "Custom Features", "API Integration", "Cloud Ready"],
    color: "cyan"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that users love. Wireframes, prototypes, and complete design systems tailored to your brand.",
    features: ["User Research", "Figma Design", "Brand Identity", "Design Systems"],
    color: "purple"
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    description: "Lightning-fast, secure hosting that keeps you online 24/7. Automated deployments and scalable infrastructure.",
    features: ["Vercel/AWS", "SSL Security", "Auto Backups", "99.9% Uptime"],
    color: "blue"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your site running smoothly. Updates, fixes, and new features whenever you need them.",
    features: ["Regular Updates", "Bug Fixes", "Performance Tuning", "Priority Support"],
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description: "Get found on Google and load in under 2 seconds. Technical SEO, speed optimization, and conversion improvements.",
    features: ["Technical SEO", "Speed Boost", "Core Web Vitals", "Analytics Setup"],
    color: "pink"
  }
];

const colorClasses = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
    hover: "hover:border-emerald-500/40"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    icon: "text-cyan-400",
    hover: "hover:border-cyan-500/40"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    icon: "text-purple-400",
    hover: "hover:border-purple-500/40"
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: "text-blue-400",
    hover: "hover:border-blue-500/40"
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    icon: "text-orange-400",
    hover: "hover:border-orange-500/40"
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    icon: "text-pink-400",
    hover: "hover:border-pink-500/40"
  }
};

export default function ServicesSection() {
  return (
    <div className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Services That Drive <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            End-to-end digital solutions designed to help your business grow faster, reach more customers, and stand out online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];
            
            return (
              <div 
                key={index}
                className={`${colors.bg} ${colors.border} ${colors.hover} border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className={`${colors.bg} ${colors.border} border w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text-', 'bg-')}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to start your project?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Let's discuss your goals and create a custom solution that fits your needs and budget.
          </p>
          <a 
            href="https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
}