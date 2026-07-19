'use client';
import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '@/data/services';

// Services highlighted in the navbar dropdown.
const FEATURED_SLUGS = ["software-development", "app-development", "ai-automation", "cloud-solutions"];
const FEATURED_SERVICES = FEATURED_SLUGS
  .map((slug) => SERVICES.find((s) => s.slug === slug))
  .filter(Boolean);

function ServicePopup() {
  const [activeService, setActiveService] = useState(FEATURED_SERVICES[0]);
  const ActiveIcon = Icons[activeService.icon] || Icons.Sparkles;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      {/* Main Glass Container */}
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d12]/50 backdrop-blur-xl shadow-2xl">

        {/* Left Side: Service List */}
        <div className="w-full md:w-5/12 p-6 border-b md:border-b-0 md:border-r border-white/10">
          <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6 px-4">
            Our Core Expertise
          </h3>
          <div className="space-y-1">
            {FEATURED_SERVICES.map((service) => {
              const Icon = Icons[service.icon] || Icons.Sparkles;
              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  onMouseEnter={() => setActiveService(service)}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${activeService.slug === service.slug
                      ? 'bg-white/10 shadow-inner'
                      : 'hover:bg-white/5'
                    }`}
                >
                  <div className={`p-2 rounded-lg ${activeService.slug === service.slug ? 'text-blue-400' : 'text-slate-400'}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm md:text-base">{service.title}</h4>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{service.description}</p>
                  </div>
                  {activeService.slug === service.slug && (
                    <div className="ml-auto self-center text-blue-400">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
          <Link href="/services" className="mt-8 text-blue-400 text-xs font-semibold px-4 flex items-center gap-2 hover:underline">
            View All Specialized Services →
          </Link>
        </div>

        {/* Right Side: Preview Panel */}
        <div className="w-full md:w-7/12 p-8 flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent">
          <div>
            {/* Image Preview with overlay */}
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="bg-blue-600 p-1.5 rounded-md text-white">
                  <ActiveIcon size={20} />
                </div>
                <span className="text-white font-bold text-sm tracking-wide">{activeService.title}</span>
              </div>
            </div>

            <p className="text-slate-200 text-lg font-medium leading-tight mb-4">
              {activeService.tagline}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeService.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={`/services/${activeService.slug}`}
            className="cursor-pointer group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/20"
          >
            Explore Solution
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ServicePopup;
