import { defaultDisclaimerContent } from "../data/disclaimerContent";

export default function DisclaimerPage() {
  const { title, firmName, intro, acknowledgements, notice, liabilityDisclaimer } = defaultDisclaimerContent;

  return (
    <section className="editorial-section disclaimer-page-section section-wash">
      <div className="container-site max-w-4xl mx-auto">
        <div className="section-heading-row mb-8">
          <div>
            <p className="eyebrow">Regulatory Compliance</p>
            <h1 className="section-title">{title}</h1>
          </div>
          <p className="section-intro">
            Bar Council of India compliance statement and official legal notices for {firmName}.
          </p>
        </div>

        <div className="border border-[#e7dfd1] bg-[#ffffff] p-8 md:p-12 shadow-sm space-y-6">
          <p className="text-lg text-[#0b1f37] font-semibold">
            {intro}
          </p>

          <ol className="list-decimal pl-6 space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            {acknowledgements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>

          <div className="border-t border-[#e7dfd1] pt-6 space-y-4">
            <h2 className="text-base text-[#800020] uppercase tracking-wider font-bold">
              Information Notice
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {notice}
            </p>
          </div>

          <div className="border-t border-[#e7dfd1] pt-6 space-y-4">
            <h2 className="text-base text-[#800020] uppercase tracking-wider font-bold">
              Limitation of Liability &amp; Jurisdiction
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {liabilityDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
