import React, { useState } from 'react';
import {
  Code,
  Cpu,
  Layers,
  Smartphone,
  Globe,
  BarChart3,
  ArrowRight
} from 'lucide-react'; // Using Lucide for clean icons

const services = [
  {
    id: 'web-dev',
    title: 'Cloud Architecture',
    description: 'Scalable serverless solutions and infrastructure.',
    icon: <Globe size={20} />,
    details: {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
      tagline: 'We build resilient backends for modern enterprises.',
      tags: ['AWS/Azure', 'Kubernetes', 'Microservices', 'DevOps']
    }
  },
  {
    id: 'ai-solutions',
    title: 'Cognitive Computing',
    description: 'Custom LLMs and predictive data modeling.',
    icon: <Cpu size={20} />,
    details: {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
      tagline: 'Harness the power of neural networks for your data.',
      tags: ['NLP', 'Machine Learning', 'PyTorch', 'Data Lakes']
    }
  },
  {
    id: 'mobile',
    title: 'Next-Gen Mobility',
    description: 'Native performance for iOS and Android platforms.',
    icon: <Smartphone size={20} />,
    details: {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
      tagline: 'Seamless mobile experiences with high retention.',
      tags: ['React Native', 'Swift', 'Kotlin', 'Flutter']
    }
  },
  {
    id: 'design',
    title: 'Visual Engineering',
    description: 'High-fidelity UI/UX and motion systems.',
    icon: <Layers size={20} />,
    details: {
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
      tagline: 'Design that bridges the gap between human and machine.',
      tags: ['Figma', 'Prototyping', 'Design Systems', '3D Assets']
    }
  }
];

function ServicePopup() {
  const [activeService, setActiveService] = useState(services[0]);

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
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${activeService.id === service.id
                    ? 'bg-white/10 shadow-inner'
                    : 'hover:bg-white/5'
                  }`}
              >
                <div className={`p-2 rounded-lg ${activeService.id === service.id ? 'text-blue-400' : 'text-slate-400'}`}>
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">{service.title}</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{service.description}</p>
                </div>
                {activeService.id === service.id && (
                  <div className="ml-auto self-center text-blue-400">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="mt-8 text-blue-400 text-xs font-semibold px-4 flex items-center gap-2 hover:underline">
            View All Specialized Services →
          </button>
        </div>

        {/* Right Side: Preview Panel */}
        <div className="w-full md:w-7/12 p-8 flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent">
          <div>
            {/* Image Preview with overlay */}
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
              <img
                src={activeService.details.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="bg-blue-600 p-1.5 rounded-md text-white">
                  {activeService.icon}
                </div>
                <span className="text-white font-bold text-sm tracking-wide">{activeService.title}</span>
              </div>
            </div>

            <p className="text-slate-200 text-lg font-medium leading-tight mb-4">
              {activeService.details.tagline}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeService.details.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button className="cursor-pointer group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/20">
            Explore Solution
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default ServicePopup;