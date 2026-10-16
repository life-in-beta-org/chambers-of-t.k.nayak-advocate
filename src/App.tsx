import Header from "./components/layout/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
// import Offices from "./sections/Offices";
import PracticeAreas from "./sections/PracticeAreas";
import Team from "./sections/Team";
import Updates from "./sections/Updates";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Team />
        <Updates />
        {/* <Offices /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
