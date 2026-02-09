import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Target, Eye, Globe, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Deepsikha IT</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Bridging the gap between imagination and technology through world-class engineering and design.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn className="bg-blue-50 p-10 rounded-3xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses globally by delivering high-quality, innovative, and scalable digital solutions that solve real-world problems and drive tangible growth.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-slate-50 p-10 rounded-3xl">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted technology partner for enterprises and startups alike, known for our integrity, technical excellence, and forward-thinking AI capabilities.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-corporate-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We constantly explore new technologies like AI to keep you ahead." },
              { title: "Integrity", desc: "We build trust through transparent communication and delivery." },
              { title: "Excellence", desc: "We don't settle for good. We strive for pixel-perfect quality." }
            ].map((val, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-gray-500">{val.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Globe className="w-16 h-16 mx-auto text-blue-500 mb-6" />
            <h2 className="text-3xl font-bold mb-6">Global Reach, Local Impact</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Headquartered in Bristol, UK, we serve clients across Europe, North America, and Asia. Our distributed team ensures we bring the best global talent to your project.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};