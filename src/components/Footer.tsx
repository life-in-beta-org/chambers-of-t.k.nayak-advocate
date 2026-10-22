import { handleNavClick } from "../utils/navigation";

const footerLinks = [
	{ label: "About", href: "/about" },
	{ label: "Practice Areas", href: "/practice-areas" },
	{ label: "People", href: "/people" },
	{ label: "Achievements", href: "/achievements" },
	{ label: "Media", href: "/media" },
	{ label: "Offices", href: "/offices" },
	{ label: "Contact", href: "/contact" },
];

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container-site footer-grid">
				<nav aria-label="Footer navigation"><p className="footer-label">Navigate</p>{footerLinks.map((link) => <a href={link.href} key={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>)}</nav>
				<div><p className="footer-label">Locations</p><p>New Delhi | Tripura | Meghalaya</p></div>
			</div>
			<div className="container-site footer-bottom">
				<span>© {new Date().getFullYear()} Chambers of T. K. Nayak</span>
				<span className="inline-flex items-center gap-3">
					<a href="/disclaimer" onClick={(e) => handleNavClick(e, "/disclaimer")} className="hover:underline">Disclaimer</a>
				</span>
			</div>
		</footer>
	);
}
