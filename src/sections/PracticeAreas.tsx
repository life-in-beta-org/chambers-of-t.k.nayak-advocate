import { useState, useEffect } from "react";
import { practiceAreas } from "../data/content";

interface PracticeAreasProps {
	page?: boolean;
}

export default function PracticeAreas({ page = false }: PracticeAreasProps) {
	const [openNumber, setOpenNumber] = useState<string | null>(() => {
		if (typeof window !== "undefined") {
			const hash = window.location.hash;
			if (hash && hash.startsWith("#practice-")) {
				return hash.replace("#practice-", "");
			}
		}
		return null;
	});
	const visibleAreas = practiceAreas;

	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash;
			if (hash && hash.startsWith("#practice-")) {
				setOpenNumber(hash.replace("#practice-", ""));
			}
		};
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	const toggleArea = (number: string) => {
		setOpenNumber((prev) => (prev === number ? null : number));
	};

	return (
		<section id={page ? "practice-areas-page" : "practice-areas"} className="editorial-section practice-section section-wash">
			<div className="container-site">
				<div className="section-heading-row">
					<div>
						<p className="eyebrow">Areas of Practice</p>
						<h2 className="section-title">Many Fields. <br/>One Discipline.</h2>
					</div>
					<div className="section-intro-block">
						{!page && <a className="section-link" href="/practice-areas">View all practice areas <span aria-hidden="true">-&gt;</span></a>}
					</div>
				</div>
				<div className="practice-list">
					{visibleAreas.map((area) => {
						const isOpen = openNumber === area.number;
						return (
							<div className={`practice-item ${isOpen ? "is-open" : ""}`} id={`practice-${area.number}`} key={area.number}>
								<button
									type="button"
									className={`practice-entry ${isOpen ? "is-open" : ""}`}
									onClick={() => toggleArea(area.number)}
									aria-expanded={isOpen}
									aria-controls={`practice-dropdown-${area.number}`}
								>
									<span className="practice-number">{area.number}</span>
									<span className="practice-content">
										<h3>{area.title}</h3>
										<span className="practice-preview">{area.description}</span>
									</span>
									<span className="practice-arrow" aria-hidden="true">-&gt;</span>
								</button>
								<div
									id={`practice-dropdown-${area.number}`}
									className={`practice-dropdown ${isOpen ? "is-open" : ""}`}
									role="region"
									aria-label={`${area.title} details`}
								>
									<div className="practice-dropdown-inner">
										<div className="practice-dropdown-body">
											<p className="practice-dropdown-intro">{area.detailIntro || area.description}</p>
											<div className="practice-categories-grid">
												{area.sections.map((section, idx) => (
													<div className="practice-category-card" key={idx}>
														<h4 className="practice-category-title">{section.category}</h4>
														<ul className="practice-category-list">
															{section.items.map((item, itemIdx) => (
																<li key={itemIdx}>{item}</li>
															))}
														</ul>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

