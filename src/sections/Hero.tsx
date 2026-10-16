import justica from "../assets/justica.png";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid container-site">
        <div className="hero-bottom-word" aria-hidden="true">LAWYER</div>

        <div className="hero-copy">
          {/* <p className="hero-kicker">Chambers of T. K. Nayak</p> */}
          <h1>
            <span className="hero-line">
              Your Legal <span className="hero-highlight">Partners</span> in
            </span>
            <span className="hero-line">Every Situation</span>
          </h1>
          <p className="hero-description">
                At Chambers, we transform legal complexities into strategic
                opportunities. Our seasoned team delivers exceptional,
                personalized legal services to protect and empower you.
              </p>
              <div className="hero-actions">
                <a className="hero-button" href="#contact">Consult Now</a>
                <a className="hero-text-link" href="#practice-areas">Explore <span aria-hidden="true">-&gt;</span></a>
              </div>
            </div>

            <div className="hero-figure pt-16" aria-hidden="true">
              <img src={justica} alt="" />
            </div>

            <aside className="hero-services" aria-label="Practice areas">
              <div className="service-icons">
                <span>§</span><span>▤</span><span>♟</span><span>⚖</span>
              </div>
              <p className="service-intro"><span>-&gt;</span> Corporate Law Services</p>
              <p className="service-detail">Guiding businesses through legal complexities with unparalleled expertise.</p>
              <ul>
                <li>Family Law Consultation</li>
                <li>Intellectual Property Protection</li>
                <li>Criminal Defense Services</li>
              </ul>
            </aside>
            
          </div>
        </section>
    );
}