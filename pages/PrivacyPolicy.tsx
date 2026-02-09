import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { COMPANY_NAME, CONTACT_EMAIL, COMPANY_ADDRESS } from '../constants';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold text-corporate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to <strong>{COMPANY_NAME}</strong>. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">5. Contact Details</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-gray-100">
                <p><strong>Full name of legal entity:</strong> {COMPANY_NAME}</p>
                <p><strong>Email address:</strong> {CONTACT_EMAIL}</p>
                <p><strong>Postal address:</strong> {COMPANY_ADDRESS}</p>
              </div>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};