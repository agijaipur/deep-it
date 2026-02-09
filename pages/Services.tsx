import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              End-to-end technology services designed to accelerate your business growth.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all group">
                 <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <service.icon className="w-7 h-7" />
                    </div>
                    {service.id.includes('ai') && (
                       <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                         High Demand
                       </span>
                    )}
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                 <p className="text-slate-600 mb-6 leading-relaxed">
                   {service.fullDescription}
                 </p>
                 
                 <div className="mb-8">
                   <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">Key Features</h4>
                   <div className="flex flex-wrap gap-2">
                     {service.features.slice(0, 3).map((feature, i) => (
                       <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-md border border-gray-200">
                         {feature}
                       </span>
                     ))}
                   </div>
                 </div>

                 <Link to={`/services/${service.id}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                   View Details <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology Snippet */}
      <section className="py-20 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">How We Deliver</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               {['Discovery', 'Design', 'Development', 'Testing', 'Deployment'].map((step, i) => (
                 <div key={i} className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold text-blue-500 opacity-80 mr-3">0{i+1}</span>
                    <span className="text-lg md:text-xl font-medium">{step}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};