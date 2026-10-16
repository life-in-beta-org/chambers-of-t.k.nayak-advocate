interface Office {
	name: string;
	address: string;
	contact: string;
}

const offices: Office[] = [
	{ name: "Mayur Vihar Extension, Delhi", address: "Full postal address to be supplied", contact: "Telephone and email details to be supplied" },
	{ name: "Golf Links, Meghalaya", address: "Full postal address to be supplied", contact: "Telephone and email details to be supplied" },
];

export default function Offices() {
	return (
		<section id="offices" className="editorial-section offices-section">
			<div className="container-site">
				<div className="section-heading-row">
					<div>
						<p className="eyebrow">Office Locations</p>
						<h2 className="section-title">Places to begin a conversation.</h2>
					</div>
					<p className="section-intro">The location labels below were supplied for this page. Complete contact and address information remains to be confirmed.</p>
				</div>
				<div className="offices-grid">
					{offices.map((office, index) => (
						<article className="office-entry" key={office.name}>
							<span className="office-number">0{index + 1}</span>
							<h3>{office.name}</h3>
							<dl>
								<div><dt>Address</dt><dd>{office.address}</dd></div>
								<div><dt>Contact</dt><dd>{office.contact}</dd></div>
								<div><dt>Directions</dt><dd>Map link to be supplied</dd></div>
							</dl>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
