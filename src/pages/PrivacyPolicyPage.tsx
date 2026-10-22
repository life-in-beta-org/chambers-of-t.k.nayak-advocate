export default function PrivacyPolicyPage() {
  return (
    <section className="editorial-section privacy-page-section section-wash">
      <div className="container-site max-w-4xl mx-auto">
        <div className="section-heading-row mb-8">
          <div>
            <p className="eyebrow">Client Confidentiality &amp; Data Protection</p>
            <h1 className="section-title">Privacy Policy</h1>
          </div>
          <p className="section-intro">
            How Chambers of T. K. Nayak respects, handles, and protects confidential communications and user information.
          </p>
        </div>

        <div className="border border-[#e7dfd1] bg-[#ffffff] p-8 md:p-12 shadow-sm space-y-8">
          <div>
            <h2 className="text-xl text-[#0b1f37] font-semibold mb-3">
              1. Attorney-Client Privilege &amp; Professional Secrecy
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              The Chambers of T. K. Nayak adheres to the highest standards of professional ethics as prescribed by the Bar Council of India. Any information, correspondence, or documents shared in the course of legal consultation or representation are treated with strict confidentiality under statutory advocate-client privilege.
            </p>
          </div>

          <div className="border-t border-[#e7dfd1] pt-6">
            <h2 className="text-xl text-[#0b1f37] font-semibold mb-3">
              2. Information Collected
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              We collect information provided directly by you when submitting an enquiry or contacting our offices:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-700">
              <li>Full name and contact details (email address, telephone number).</li>
              <li>Subject matter and nature of legal enquiry.</li>
              <li>Any supplementary information voluntarily transmitted for preliminary assessment.</li>
            </ul>
          </div>

          <div className="border-t border-[#e7dfd1] pt-6">
            <h2 className="text-xl text-[#0b1f37] font-semibold mb-3">
              3. Use of Information
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Information submitted through this website is utilized solely to respond to your specific request, schedule consultations, evaluate conflict of interest, and deliver requested legal services. We do not sell, rent, commercialize, or disclose user data to third parties.
            </p>
          </div>

          <div className="border-t border-[#e7dfd1] pt-6">
            <h2 className="text-xl text-[#0b1f37] font-semibold mb-3">
              4. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              This policy is governed by the laws of India, including the Information Technology Act, 2000 and applicable data protection regulations. Exclusive jurisdiction for any disputes resides with the courts of competent jurisdiction in New Delhi, India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
