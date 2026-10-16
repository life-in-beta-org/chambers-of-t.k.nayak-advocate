interface UpdateItem {
	category: string;
	title: string;
	excerpt: string;
}

const updates: UpdateItem[] = [
	{ category: "Publication placeholder", title: "A considered space for legal commentary", excerpt: "Sample copy reserved for a verified article, case note or professional publication." },
	{ category: "Update placeholder", title: "Perspectives to be added", excerpt: "This entry can be replaced or removed when genuine chambers content is available." },
	{ category: "Note placeholder", title: "Clarity in a changing legal landscape", excerpt: "Placeholder text for a future legal update or publication." },
];

export default function Updates() {
	return (
		<section id="updates" className="editorial-section updates-section section-wash">
			<div className="container-site">
				<div className="section-heading-row">
					<div>
						<p className="eyebrow">Legal Updates</p>
						<h2 className="section-title">Notes from the chambers.</h2>
					</div>
					<p className="section-intro">Placeholder entries are shown until verified publications or legal updates are supplied.</p>
				</div>
				<div className="updates-grid">
					{updates.map((update, index) => (
						<article className={index === 0 ? "update-feature" : "update-item"} key={update.title}>
							<p className="meta-label">{update.category}</p>
							<h3>{update.title}</h3>
							<p>{update.excerpt}</p>
							<span className="placeholder-label">Content to be supplied</span>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
