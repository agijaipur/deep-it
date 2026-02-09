import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { COMPANY_NAME, CONTACT_EMAIL } from '../constants';

export const TermsConditions: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold text-corporate-900 mb-2">Terms & Conditions</h1>
          <p className="text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">1. Introduction</h2>
              <p>
                These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, 
                accessible at <strong>{COMPANY_NAME}</strong>.
              </p>
              <p className="mt-2">
                By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website 
                if you disagree with any of these Website Standard Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">2. Intellectual Property Rights</h2>
              <p>
                Other than the content you own, under these Terms, {COMPANY_NAME} and/or its licensors own all the intellectual 
                property rights and materials contained in this Website. You are granted limited license only for purposes of viewing 
                the material contained on this Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">3. Restrictions</h2>
              <p className="mb-4">You are specifically restricted from all of the following:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Publishing any Website material in any other media;</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                <li>Publicly performing and/or showing any Website material;</li>
                <li>Using this Website in any way that is or may be damaging to this Website;</li>
                <li>Using this Website in any way that impacts user access to this Website;</li>
                <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">4. No Warranties</h2>
              <p>
                This Website is provided "as is," with all faults, and {COMPANY_NAME} express no representations or warranties, 
                of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this 
                Website shall be interpreted as advising you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall {COMPANY_NAME}, nor any of its officers, directors and employees, be held liable for anything 
                arising out of or in any way connected with your use of this Website whether such liability is under contract. 
                {COMPANY_NAME}, including its officers, directors and employees shall not be held liable for any indirect, 
                consequential or special liability arising out of or in any way related to your use of this Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">6. Governing Law & Jurisdiction</h2>
              <p>
                These Terms will be governed by and interpreted in accordance with the laws of the United Kingdom, and you submit 
                to the non-exclusive jurisdiction of the state and federal courts located in the United Kingdom for the resolution 
                of any disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};