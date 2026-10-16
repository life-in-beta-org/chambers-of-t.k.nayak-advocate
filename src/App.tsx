import Header from "./components/layout/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Media from "./sections/Media";
import PracticeAreas from "./sections/PracticeAreas";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import LegalUpdatesPage from "./pages/LegalUpdatesPage";
import MediaPage from "./pages/MediaPage";
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
      "/practice-areas": "Areas of Practice — Chambers of T. K. Nayak",
      "/legal-updates": "Legal Updates — Chambers of T. K. Nayak",
      "/media": "In the Media — Chambers of T. K. Nayak",
    };
    document.title = titles[pathname] ?? titles["/"];
  }, [pathname]);

  if (pathname === "/practice-areas") return <SiteFrame><PracticeAreasPage /></SiteFrame>;
  if (pathname === "/legal-updates") return <SiteFrame><LegalUpdatesPage /></SiteFrame>;
  if (pathname === "/media") return <SiteFrame><MediaPage /></SiteFrame>;

  return (
    <SiteFrame>
      <Hero />
      <About />
      <PracticeAreas />
      {/* <Team /> */}
      {/* <Updates /> */}
      <Media />
      {/* <Offices /> */}
      <Contact />
    </SiteFrame>
  );
}

function SiteFrame({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}
