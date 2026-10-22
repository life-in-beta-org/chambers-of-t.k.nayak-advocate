import { handleNavClick } from "../utils/navigation";

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container-site footer-bottom">
				<span>© {new Date().getFullYear()} Chambers of T. K. Nayak</span>
				<span className="inline-flex items-center gap-3">
					<a href="/disclaimer" onClick={(e) => handleNavClick(e, "/disclaimer")} className="hover:underline">Disclaimer</a>
				</span>
			</div>
		</footer>
	);
}
