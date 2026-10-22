import { practiceAreas } from "../data/content";

interface PracticeAreasProps {
	page?: boolean;
}

export default function PracticeAreas({ page = false }: PracticeAreasProps) {
	const visibleAreas = page ? practiceAreas : practiceAreas.slice(0, 6);

	return (
		<section id={page ? "practice-areas-page" : "practice-areas"} className="editorial-section practice-section section-wash">
			<div className="container-site">
				<div className="section-heading-row">
					<div>
						<p className="eyebrow">Areas of Practice</p>
						<h2 className="section-title">Many Fields. <br/>One Discipline.</h2>
					</div>
					<div className="section-intro-block">
						{/* <p className="section-intro">These categories are placeholders and should be revised against the chambers&apos; confirmed services.</p> */}
						{!page && <a className="section-link" href="/practice-areas">View all practice areas <span aria-hidden="true">-&gt;</span></a>}
					</div>
				</div>
				<div className="practice-list">
					{visibleAreas.map((area) => (
						<a className="practice-entry" href={page ? `#practice-${area.number}` : `/practice-areas#practice-${area.number}`} id={page ? `practice-${area.number}` : undefined} key={area.number}>
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
