import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import { SERVICES } from '../constants';
import { FadeIn } from '../components/FadeIn';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-corporate-900 text-white py-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl -z-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
           </Link>
           <FadeIn>
             <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
             </div>
             <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
               {service.fullDescription}
             </p>
           </FadeIn>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Features */}
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6">Key Features & Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Process */}
            {service.processStep && (
              <FadeIn delay={0.2}>
                <h2 className="text-2xl font-bold text-corporate-900 mb-6">Development Process</h2>
                <div className="space-y-4">
                  {service.processStep.map((step, i) => (
                    <div key={i} className="flex items-center">
                       <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-4">
                         {i + 1}
                       </div>
                       <div className="flex-1 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                         <span className="font-semibold text-slate-800">{step}</span>
                       </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            )}

            {/* Tech Stack */}
            {service.platforms && (
              <FadeIn delay={0.3}>
                 <h2 className="text-2xl font-bold text-corporate-900 mb-6">Technology Stack</h2>
                 <div className="flex flex-wrap gap-3">
                   {service.platforms.map((tech, i) => (
                     <span key={i} className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium">
                       {tech}
                     </span>
                   ))}
                 </div>
              </FadeIn>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
               
               {/* Industries Widget */}
               <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                 <h3 className="text-lg font-bold text-slate-900 mb-4">Industries Served</h3>
                 <div className="flex flex-wrap gap-2">
                   {service.industries.map((ind, i) => (
                     <span key={i} className="text-sm text-slate-600 bg-gray-100 px-3 py-1 rounded-md">
                       {ind}
                     </span>
                   ))}
                 </div>
               </div>

               {/* CTA Widget */}
               <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white text-center">
                 <h3 className="text-xl font-bold mb-4">Ready to start?</h3>
                 <p className="text-blue-100 mb-6 text-sm">
                   Get a custom quote for your {service.title.toLowerCase()} project today.
                 </p>
                 <Link to="/contact" className="block w-full py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                   Talk to an Expert
                 </Link>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};