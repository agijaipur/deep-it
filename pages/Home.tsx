import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Layout, Users, Zap } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { SERVICES } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/30 rounded-bl-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl lg:text-6xl font-bold text-corporate-900 leading-tight mb-6">
                Innovating for a <br/>
                <span className="text-blue-600">Digital Future</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Deepsikha IT Consultancy delivers premium, end-to-end digital solutions. From AI automation to scalable SaaS platforms, we build technology that drives growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="px-8 py-4 bg-corporate-900 text-white rounded-full font-medium hover:bg-corporate-800 transition-all shadow-lg hover:shadow-xl text-center">
                  Get a Consultation
                </Link>
                <Link to="/services" className="px-8 py-4 bg-white text-corporate-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all text-center">
                  Explore Services
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="left" className="relative hidden lg:block">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                 <div className="bg-white p-6 rounded-2xl shadow-xl transform translate-y-8">
                    <Code className="w-10 h-10 text-blue-500 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Modern Code</h3>
                    <p className="text-sm text-gray-500">Clean, scalable architectures.</p>
                 </div>
                 <div className="bg-corporate-900 p-6 rounded-2xl shadow-xl text-white">
                    <Zap className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="font-bold text-lg mb-2">AI Driven</h3>
                    <p className="text-sm text-gray-400">Intelligent automation at core.</p>
                 </div>
                 <div className="bg-blue-600 p-6 rounded-2xl shadow-xl text-white transform translate-y-8">
                    <Layout className="w-10 h-10 text-white mb-4" />
                    <h3 className="font-bold text-lg mb-2">UI/UX Focus</h3>
                    <p className="text-sm text-blue-100">User-centric design patterns.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-xl">
                    <Users className="w-10 h-10 text-blue-500 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                    <p className="text-sm text-gray-500">Global delivery standards.</p>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-corporate-900 mb-4">Who We Are</h2>
              <p className="text-slate-600 text-lg">
                We are a team of visionary technologists committed to transforming businesses through innovation. 
                Our expertise bridges the gap between complex problems and elegant digital solutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Services Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-corporate-900 mb-4">Our Core Expertise</h2>
            <p className="text-slate-600">Comprehensive digital services tailored for your success.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Link to={`/services/${service.id}`} className="group block h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-blue-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                  <span className="text-blue-600 text-sm font-medium flex items-center">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-corporate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Partner with Deepsikha IT?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                We don't just write code; we build business value. Our approach combines technical excellence with strategic insight.
              </p>
              <div className="space-y-4">
                {[
                  "Proven expertise in AI and scalable systems",
                  "Client-centric, transparent communication",
                  "Agile methodology for faster time-to-market",
                  "Global delivery with local accountability"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                    <div className="text-sm text-gray-400">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Support System</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-corporate-900 mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Let's discuss how we can help you build the next generation of digital products.
            </p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
              Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};