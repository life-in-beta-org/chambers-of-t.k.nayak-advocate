import { defaultDisclaimerContent } from "../data/disclaimerContent";

export default function DisclaimerPage() {
  const { title, intro, acknowledgements, notice, liabilityDisclaimer } = defaultDisclaimerContent;

  return (
    <section className="editorial-section disclaimer-page-section section-wash">
      <div className="container-site max-w-4xl mx-auto">
        <h1 className="section-title mb-8">{title}</h1>

        <div className="border border-[#e7dfd1] bg-[#ffffff] p-8 md:p-12 shadow-sm space-y-6">
          <p className="text-lg text-[#0b1f37] font-semibold">
            {intro}
          </p>

          <ol className="list-decimal pl-6 space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            {acknowledgements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {notice}
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {liabilityDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
