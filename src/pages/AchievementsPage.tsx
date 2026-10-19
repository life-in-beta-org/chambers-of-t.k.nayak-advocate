export default function AchievementsPage() {
  return (
    <section className="editorial-section achievements-section section-wash">
      <div className="container-site">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Distinctions &amp; Milestones</p>
            <h2 className="section-title">Achievements</h2>
          </div>
          <p className="section-intro">
            A record of dedicated representation, court appearances, and professional distinctions earned across jurisdictions.
          </p>
        </div>

        <div className="achievements-grid mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#e7dfd1] bg-[#ffffff] p-8">
            <span className="text-3xl font-serif text-[#800020] font-bold block mb-2">25+</span>
            <h3 className="font-serif text-lg text-[#0b1f37] font-semibold mb-2">Years of Practice</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Decades of experience providing considered legal advisory and dispute resolution across commercial and civil matters.
            </p>
          </div>

          <div className="border border-[#e7dfd1] bg-[#ffffff] p-8">
            <span className="text-3xl font-serif text-[#0b1f37] font-bold block mb-2">Multi-Court</span>
            <h3 className="font-serif text-lg text-[#0b1f37] font-semibold mb-2">Superior Appellate Jurisdictions</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Regular appearances before High Courts, appellate tribunals, and the Supreme Court of India.
            </p>
          </div>

          <div className="border border-[#e7dfd1] bg-[#ffffff] p-8">
            <span className="text-3xl font-serif text-[#0b1f37] font-bold block mb-2">Principled</span>
            <h3 className="font-serif text-lg text-[#0b1f37] font-semibold mb-2">Thoughtful Advocacy</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recognized for rigorous preparation, deep statutory insight, and commitment to the rule of law.
            </p>
          </div>
        </div>

        <div className="mt-8 border border-[#e7dfd1] bg-[#faf8f3] p-8 text-center text-sm text-gray-600">
          <p>
            Detailed case milestones, reported judgments, and official accolades will be updated upon client verification.
          </p>
        </div>
      </div>
    </section>
  );
}
