import Header from "./components/layout/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import HeroAboutBackground from "./components/HeroAboutBackground";
import Media from "./sections/Media";
import PracticeAreas from "./sections/PracticeAreas";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import LegalUpdatesPage from "./pages/LegalUpdatesPage";
import MediaPage from "./pages/MediaPage";
import AboutPage from "./pages/AboutPage";
import PeoplePage from "./pages/PeoplePage";
import AchievementsPage from "./pages/AchievementsPage";
import OfficesPage from "./pages/OfficesPage";
import ContactPage from "./pages/ContactPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DisclaimerGate from "./components/DisclaimerGate";
import { useEffect, useState } from "react";

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return pathname;
}

export default function App() {
  const pathname = usePathname();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Chambers of T. K. Nayak — Advocate",
      "/about": "About the Chambers — Chambers of T. K. Nayak",
      "/people": "Our People & Advocates — Chambers of T. K. Nayak",
      "/our-team": "Our People & Advocates — Chambers of T. K. Nayak",
      "/practice-areas": "Areas of Practice — Chambers of T. K. Nayak",
      "/achievements": "Achievements & Accolades — Chambers of T. K. Nayak",
      "/awards": "Achievements & Accolades — Chambers of T. K. Nayak",
      "/media": "In the Media — Chambers of T. K. Nayak",
      "/offices": "Office Locations — Chambers of T. K. Nayak",
      "/office": "Office Locations — Chambers of T. K. Nayak",
      "/contact": "Contact — Chambers of T. K. Nayak",
      "/disclaimer": "Disclaimer & Confirmation — Chambers of T. K. Nayak",
      "/privacy-policy": "Privacy Policy — Chambers of T. K. Nayak",
      "/policy": "Privacy Policy — Chambers of T. K. Nayak",
      "/legal-updates": "Legal Updates — Chambers of T. K. Nayak",
    };
    document.title = titles[pathname] ?? titles["/"];
  }, [pathname]);

  function renderRoute() {
    if (pathname === "/about") return <SiteFrame><AboutPage /></SiteFrame>;
    if (pathname === "/people" || pathname === "/our-team") return <SiteFrame><PeoplePage /></SiteFrame>;
    if (pathname === "/practice-areas") return <SiteFrame><PracticeAreasPage /></SiteFrame>;
    if (pathname === "/achievements" || pathname === "/awards") return <SiteFrame><AchievementsPage /></SiteFrame>;
    if (pathname === "/media") return <SiteFrame><MediaPage /></SiteFrame>;
    if (pathname === "/offices" || pathname === "/office") return <SiteFrame><OfficesPage /></SiteFrame>;
    if (pathname === "/contact") return <SiteFrame includeContact={false}><ContactPage /></SiteFrame>;
    if (pathname === "/disclaimer") return <SiteFrame><DisclaimerPage /></SiteFrame>;
    if (pathname === "/privacy-policy" || pathname === "/policy") return <SiteFrame><PrivacyPolicyPage /></SiteFrame>;
    if (pathname === "/legal-updates") return <SiteFrame><LegalUpdatesPage /></SiteFrame>;

    return (
      <SiteFrame>
        <div className="hero-about-wrapper">
          <HeroAboutBackground />
          <Hero />
          <About />
        </div>
        <PracticeAreas />
        {/* <Team /> */}
        {/* <Updates /> */}
        <Media />
        {/* <Offices /> */}
      </SiteFrame>
    );
  }

  return (
    <DisclaimerGate>
      {renderRoute()}
    </DisclaimerGate>
  );
}

function SiteFrame({
  children,
  includeContact = true,
}: {
  children: React.ReactNode;
  includeContact?: boolean;
}) {
  return <><Header /><main>{children}{includeContact && <Contact />}</main><Footer /></>;
}
