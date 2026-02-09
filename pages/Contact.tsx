import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { COMPANY_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-20">
      <section className="bg-corporate-900 text-white py-20">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-blue-200">We'd love to hear about your project.</p>
            </FadeIn>
         </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <FadeIn>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Visit Us</h3>
                    <p className="text-slate-600 mt-1 max-w-xs">{COMPANY_ADDRESS}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0 mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-600 mt-1 hover:text-blue-600">{CONTACT_EMAIL}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0 mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Call Us</h3>
                    <p className="text-slate-600 mt-1">
                      <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-blue-600 transition-colors">
                        {CONTACT_PHONE}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Integration */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.495039304918!2d-2.605658623352726!3d51.46743911361208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd863868069%3A0x6336307185579997!2s1%20Belmont%20Rd%2C%20St%20Andrew&#39;s%2C%20Bristol%20BS6%205AN%2C%20UK!5e0!3m2!1sen!2sus!4v1714234000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
               {status === 'success' ? (
                 <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center">
                   <h4 className="font-bold text-lg mb-2">Message Sent!</h4>
                   <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                   <button onClick={() => setStatus('idle')} className="mt-4 text-sm font-semibold underline">Send another</button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                     <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                     />
                   </div>
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                     <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                     />
                   </div>
                   <div>
                     <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                     <textarea 
                        id="message" 
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project needs..."
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                     ></textarea>
                   </div>
                   <button 
                     type="submit" 
                     disabled={status === 'submitting'}
                     className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center transition-all ${status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'}`}
                   >
                     {status === 'submitting' ? 'Sending...' : <>Send Message <Send className="w-4 h-4 ml-2" /></>}
                   </button>
                 </form>
               )}
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
};