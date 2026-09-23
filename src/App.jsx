import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import "./App.css";

const local = (name) => `/images/${name}`;

const gallery = [
  { image: "bridal-red.png", title: "Bridal Couture", tag: "Bridal Makeup" },
  { image: "hair-accessory.png", title: "Golden Veil", tag: "Hair Styling" },
  { image: "mehndi-full.png", title: "Intricate Detail", tag: "Mehndi" },
  { image: "bridal-gown.png", title: "Soft Romance", tag: "Party Makeup" },
  { image: "waves.png", title: "Statement Waves", tag: "Hair Styling" },
  { image: "bridal-maroon.png", title: "Royal Maroon", tag: "Bridal Look" },
  { image: "pink-look.png", title: "Rose Glow", tag: "Makeover" },
  { image: "bridal-carpet.png", title: "The Bridal Edit", tag: "Complete Look" },
];

const services = [
  {
    number: "01",
    title: "Bridal Make-Up",
    text: "Wedding-ready makeup designed around your features, outfit and occasion.",
    image: "bridal-red.png",
  },
  {
    number: "02",
    title: "Hair Styling",
    text: "Elegant buns, waves, extensions and statement bridal hairstyles.",
    image: "waves.png",
  },
  {
    number: "03",
    title: "Nail Extensions",
    text: "Polished nails, extensions and long-wear finishes for every celebration.",
    image: "mehndi-back.png",
  },
  {
    number: "04",
    title: "Skin Treatment",
    text: "Beauty rituals focused on a fresh, radiant and event-ready finish.",
    image: "bridal-gown.png",
  },
];

const testimonials = [
  {
    text: "Very nice experience, cooperative and experienced staff. Hygienic place.",
    name: "Google Review",
  },
  {
    text: "Love it! Service satisfaction with my hydra facial instant glow with my skin.",
    name: "Google Review",
  },
  {
    text: "Loved services and one thing is good it's very hygienic salon. I'm very happy.",
    name: "Google Review",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState("all");

  const filteredGallery =
    activeService === "all"
      ? gallery
      : gallery.filter((item) => item.tag.toLowerCase().includes(activeService));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="top-strip">
        <span>Jaggi Colony · Ambala</span>
        <span className="top-strip-center">Est. beauty & makeover studio</span>
        <a href="tel:+919817201596">+91 98172 01596</a>
      </div>

      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Curl Me Crazy home">
          <img src={local("logo-round.png")} alt="Curl Me Crazy Salon logo" />
          <span>
            <strong>CURL ME CRAZY</strong>
            <small>MAKEOVER SALON</small>
          </span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("work")}>Our Work</button>
          <button onClick={() => scrollTo("bridal")}>Bridal</button>
          <button onClick={() => scrollTo("visit")}>Visit Us</button>
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href="tel:+919817201596">
            <Phone size={15} /> Call
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <button className="book-btn" onClick={() => scrollTo("visit")}>
            Book a Visit <ArrowUpRight size={17} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image-wrap">
            <img className="hero-image" src={local("bridal-maroon.png")} alt="Bridal makeover at Curl Me Crazy" />
            <div className="hero-image-card">
              <span className="mini-label">OUR SIGNATURE</span>
              <strong>Makeover that feels like you.</strong>
              <span>Hair · Makeup · Mehndi · Nails</span>
            </div>
            <div className="hero-rating">
              <Star size={14} fill="currentColor" />
              <strong>4.9</strong>
              <span>118 Google reviews</span>
            </div>
          </div>

          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> BEAUTY, CRAFTED WITH INTENTION</div>
            <h1>Where your<br /><em>best look</em><br />comes alive.</h1>
            <p>
              A boutique makeover salon in Jaggi Colony, Ambala for bridal glam,
              statement hair, mehndi, nails and skin-focused beauty rituals.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => scrollTo("visit")}>
                Book your makeover <ArrowUpRight size={18} />
              </button>
              <button className="text-btn" onClick={() => scrollTo("work")}>
                Explore our work <ArrowRight size={18} />
              </button>
            </div>

            <div className="hero-meta">
              <div><span>01</span><b>Personalised</b><small>Look planning</small></div>
              <div><span>02</span><b>Bridal-ready</b><small>Makeup + hair</small></div>
              <div><span>03</span><b>Detail-led</b><small>From nails to mehndi</small></div>
            </div>
          </div>
        </section>

        <div className="marquee">
          <div>
            <span>BRIDAL MAKEUP</span><i>✦</i><span>HAIR EXTENSIONS</span><i>✦</i>
            <span>NAIL EXTENSIONS</span><i>✦</i><span>SKIN TREATMENT</span><i>✦</i>
            <span>MEHNDI ARTISTRY</span><i>✦</i>
          </div>
        </div>

        <section className="intro section-pad">
          <div className="section-kicker">THE CURL ME CRAZY EDIT</div>
          <div className="intro-grid">
            <h2>Not just a salon.<br /><em>A complete beauty moment.</em></h2>
            <div>
              <p>
                From the first consultation to the final mirror check, every
                detail is treated as part of your look. Curl Me Crazy brings
                together makeup, hair, mehndi, nails and skin services under one roof.
              </p>
              <button className="underlined" onClick={() => scrollTo("services")}>
                Discover the services <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div>
              <div className="section-kicker">WHAT WE DO</div>
              <h2>Beauty, with a <em>signature.</em></h2>
            </div>
            <p>Curated services for everyday polish, parties and your biggest celebrations.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>
                <img src={local(service.image)} alt={service.title} />
                <div className="service-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <button onClick={() => scrollTo("visit")}>Enquire <ArrowUpRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story-band">
          <div className="story-image">
            <img src={local("salon-front.png")} alt="Curl Me Crazy salon storefront" />
          </div>
          <div className="story-copy">
            <div className="section-kicker">THE PLACE</div>
            <h2>A little glam.<br /><em>A lot of personality.</em></h2>
            <p>
              Your local makeover stop in Phase 2, Geeta Nagari, where bridal
              details, hair transformations and beauty rituals come together in one space.
            </p>
            <div className="story-points">
              <div><Check size={16} /><span>Hygiene-conscious beauty experience</span></div>
              <div><Check size={16} /><span>Bridal & occasion-focused artistry</span></div>
              <div><Check size={16} /><span>Hair, makeup, nails, mehndi & skin</span></div>
            </div>
            <a className="outline-btn" href="https://www.google.com/maps/search/?api=1&query=Curl%20Me%20Crazy%20Salon%20Phase%202%20Geeta%20Nagari%20Jaggi%20Colony%20Ambala" target="_blank" rel="noreferrer">
              Get directions <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading work-heading">
            <div>
              <div className="section-kicker">THE PORTFOLIO</div>
              <h2>Looks worth <em>saving.</em></h2>
            </div>
            <div className="filter-row">
              {[
                ["all", "All"],
                ["bridal", "Bridal"],
                ["hair", "Hair"],
                ["mehndi", "Mehndi"],
                ["makeup", "Makeup"],
              ].map(([key, label]) => (
                <button className={activeService === key ? "active" : ""} key={key} onClick={() => setActiveService(key)}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry">
            {filteredGallery.map((item, index) => (
              <figure className={`gallery-item item-${index + 1}`} key={item.image}>
                <img src={local(item.image)} alt={item.title} />
                <figcaption>
                  <span>{item.tag}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="bridal" id="bridal">
          <div className="bridal-photo">
            <img src={local("bridal-carpet.png")} alt="Bridal makeover portrait" />
            <div className="bridal-stamp">
              <span>THE</span><strong>BRIDAL</strong><span>EDIT</span>
            </div>
          </div>
          <div className="bridal-copy">
            <div className="section-kicker">FOR YOUR BIG DAY</div>
            <h2>Your bridal look,<br /><em>your signature.</em></h2>
            <p>
              From intricate mehndi and statement hair to bridal makeup and the
              finishing details, build your complete wedding look with one team.
            </p>

            <div className="bridal-list">
              <div><span>01</span><b>Bridal Makeup</b><small>Complexion · Eyes · Lips</small></div>
              <div><span>02</span><b>Bridal Hair</b><small>Buns · Waves · Extensions</small></div>
              <div><span>03</span><b>Mehndi Artistry</b><small>Hands · Custom detailing</small></div>
              <div><span>04</span><b>Finishing Touches</b><small>Nails · Styling · Accessories</small></div>
            </div>

            <button className="primary-btn" onClick={() => scrollTo("visit")}>
              Plan my bridal look <ArrowUpRight size={18} />
            </button>
          </div>
        </section>

        <section className="offer section-pad">
          <div className="offer-poster">
            <img src={local("offer-poster.png")} alt="Curl Me Crazy salon offers" />
          </div>
          <div className="offer-copy">
            <div className="section-kicker">CURRENT OFFERS</div>
            <h2>Little extras.<br /><em>Beautiful value.</em></h2>
            <p>Ask the salon about the latest packages and student/teacher offers when you book.</p>
            <div className="offer-cards">
              <div><strong>₹800</strong><span>Permanent gel paint<br />both hands</span></div>
              <div><strong>₹200</strong><span>One-year threading<br />offer</span></div>
            </div>
            <small className="offer-note">Offers shown are based on the supplied salon poster and may be subject to terms or change.</small>
          </div>
        </section>

        <section className="reviews section-pad">
          <div className="reviews-top">
            <div>
              <div className="section-kicker">REAL CLIENT LOVE</div>
              <h2>4.9 <span>★★★★★</span></h2>
              <p>Based on 118 Google reviews</p>
            </div>
            <a className="outline-btn" href="https://www.google.com/search?q=Curl+Me+Crazy+Salon+Ambala+reviews" target="_blank" rel="noreferrer">
              Read Google reviews <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="review-grid">
            {testimonials.map((review, index) => (
              <article key={index}>
                <div className="review-stars">★★★★★</div>
                <p>“{review.text}”</p>
                <span>{review.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="visit section-pad" id="visit">
          <div className="visit-copy">
            <div className="section-kicker">COME SAY HELLO</div>
            <h2>Ready for your<br /><em>next look?</em></h2>
            <p>Call the salon, check directions or send an enquiry before you visit.</p>

            <div className="contact-stack">
              <a href="tel:+919817201596"><span><Phone size={17} /></span><div><small>Call us</small><strong>098172 01596</strong></div><ArrowUpRight size={17} /></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Curl%20Me%20Crazy%20Salon%20Phase%202%20Geeta%20Nagari%20Jaggi%20Colony%20Ambala" target="_blank" rel="noreferrer"><span><MapPin size={17} /></span><div><small>Find us</small><strong>Phase 2, Geeta Nagari, Jaggi Colony</strong></div><ArrowUpRight size={17} /></a>
              <div><span><Clock3 size={17} /></span><div><small>Hours</small><strong>Opening hours can vary — call before visiting</strong></div></div>
            </div>
          </div>

          <div className="visit-card">
            <div className="visit-logo"><img src={local("logo-round.png")} alt="" /></div>
            <div className="visit-card-copy">
              <span>CUR L ME CRAZY</span>
              <h3>MAKEOVER<br />SALON</h3>
              <p>Hair · Makeup · Mehndi · Nails · Skin</p>
            </div>
            <a href="tel:+919817201596" className="primary-btn">Call to book <Phone size={17} /></a>
            <div className="social-line">
              {/* <a href="https://www.instagram.com/curl_me_crazysalon/" target="_blank" rel="noreferrer"><Instagram size={17} /> @curl_me_crazysalon</a> */}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src={local("logo-round.png")} alt="Curl Me Crazy" />
          <div><strong>CURL ME CRAZY</strong><span>MAKEOVER SALON</span></div>
        </div>
        <p>Phase 2, Geeta Nagari, Jaggi Colony, Ambala, Haryana 134007</p>
        <div className="footer-right">
          <span>© {new Date().getFullYear()} Curl Me Crazy</span>
          <a href="tel:+919817201596">+91 98172 01596</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
