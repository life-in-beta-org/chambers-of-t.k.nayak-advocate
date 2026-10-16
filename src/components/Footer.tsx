import Wordmark from "./layout/Wordmark";

const footerLinks = [
	{ label: "About", href: "/#about" },
	{ label: "Practice Areas", href: "/#practice-areas" },
	{ label: "Team", href: "/#team" },
	{ label: "Updates", href: "/#updates" },
	{ label: "Offices", href: "/#offices" },
	{ label: "Contact", href: "/#contact" },
];

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container-site footer-grid">
				<div><Wordmark /><p className="footer-description">A reserved space for a short, verified description of the chambers.</p></div>
				<nav aria-label="Footer navigation"><p className="footer-label">Navigate</p>{footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
				<div><p className="footer-label">Locations</p><p>Mayur Vihar Extension, Delhi</p><p>Golf Links, Meghalaya</p><p className="footer-placeholder">Contact details to be supplied</p></div>
			</div>
			<div className="container-site footer-bottom"><span>© {new Date().getFullYear()} Chambers of T. K. Nayak</span><span>Privacy and legal notices to be supplied</span></div>
		</footer>
	);
}
