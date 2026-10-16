import { updates } from "../data/content";

interface UpdatesProps {
	page?: boolean;
}

export default function Updates({ page = false }: UpdatesProps) {
	const visibleUpdates = page ? updates : updates.slice(0, 3);

	return (
		<section id={page ? "legal-updates-page" : "updates"} className="editorial-section updates-section section-wash">
			<div className="container-site">
				<div className="section-heading-row">
					<div>
						<p className="eyebrow">Legal Updates</p>
						<h2 className="section-title">Notes from the chambers.</h2>
					</div>
					<div className="section-intro-block">
						<p className="section-intro">Placeholder entries are shown until verified publications or legal updates are supplied.</p>
						{!page && <a className="section-link" href="/legal-updates">View all legal updates <span aria-hidden="true">-&gt;</span></a>}
					</div>
				</div>
				<div className="updates-grid">
						{visibleUpdates.map((update, index) => (
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
