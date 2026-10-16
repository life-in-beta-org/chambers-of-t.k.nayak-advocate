interface PracticeArea {
	number: string;
	title: string;
	description: string;
}

const practiceAreas: PracticeArea[] = [
	{ number: "01", title: "Corporate and Commercial Law", description: "Placeholder description for commercial advisory and business-related enquiries." },
	{ number: "02", title: "Civil Litigation and Dispute Resolution", description: "Placeholder description for civil disputes, strategy and representation." },
	{ number: "03", title: "Family Law", description: "Placeholder description for family-related legal consultations." },
	{ number: "04", title: "Intellectual Property", description: "Placeholder description for protection and advisory work concerning intellectual property." },
	{ number: "05", title: "Criminal Law", description: "Placeholder description for criminal law enquiries and representation." },
	{ number: "06", title: "Constitutional and Administrative Law", description: "Placeholder description for public law and administrative matters." },
];

export default function PracticeAreas() {
	return (
		<section id="practice-areas" className="editorial-section practice-section section-wash">
			<div className="container-site">
				<div className="section-heading-row">
					<div>
						<p className="eyebrow">Areas of Practice</p>
						<h2 className="section-title">The work, considered carefully.</h2>
					</div>
					<p className="section-intro">These categories are placeholders and should be revised against the chambers&apos; confirmed services.</p>
				</div>
				<div className="practice-list">
					{practiceAreas.map((area) => (
						<a className="practice-entry" href="#contact" key={area.number}>
							<span className="practice-number">{area.number}</span>
							<span className="practice-content">
								<h3>{area.title}</h3>
								<span>{area.description}</span>
							</span>
							<span className="practice-arrow" aria-hidden="true">-&gt;</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
