import Image from "next/image";
import {
  CalendarDays,
  Home,
  Mail,
  MapPin,
  Newspaper,
  UsersRound,
} from "lucide-react";

const basePath = "/imtecad-2026";
const asset = (name) => `${basePath}/assets/${name}`;

const navItems = [
  ["Agenda", "#agenda"],
  ["Venue", "#venue"],
  ["Speakers", "#speakers"],
  ["Nice Travel News", "#nice-news"],
  ["Da Nang Travel News", "#danang-news"],
  ["Previous Conference", "#previous"],
  ["Galleries", "#galleries"],
];

const organizers = [
  { name: "DNIIT", image: "1ef117c01c86c275.webp" },
  { name: "Université Côte d'Azur", image: "b1a0a900f5ddf92b.png" },
  { name: "ELMI - UniCA", image: "people/logo-elmi-unica.jpg" },
  { name: "Institut de Chimie de Nice", image: "cad3c326592cf74f.webp" },
  { name: "Furama Resort Danang", image: "furama-resort-danang-logo.svg", zoom: 1.55 },
  { name: "Danang Tourism Association", image: "9a765a3669ccad36.webp", zoom: 1.65 },
  { name: "Ulysseus European University", image: "canva-edit/4cd8032f971429b3.png", zoom: 1.15 },
  { name: "Danang Hotel Association", image: "canva-edit/27ed3f05c004f948.png", zoom: 1.2 },
];

const committee = [
  ["Prof. Dr. STÉPHANE Ngo Mai", "Vice-President for Ulysseus, Université Côte d'Azur", "canva-edit/a3bba502fca2603a.png"],
  ["Dr. CAO Tri Dung", "Chairman of the Danang Tourism Association", "canva-edit/c1d716f830047cc6.webp"],
  ["Prof. Franck Sosthé", "Département Tourisme, EUR ELMI, Université Côte d'Azur", "canva-edit/00240ad2bc555c56.png"],
  ["Mr. NGUYEN Duc Quynh", "General Manager of Furama Resort Danang", "canva-edit/4637232ff52fbb74.png"],
  ["Prof. Sylvain Antoniotti", "Vice-President IDEX, Université Côte d'Azur", "people/sylvain-antoniotti.jpg"],
  ["Pauline Archard", "Université Côte d'Azur", "people/pauline-archard.jpg"],
  ["Prof. Dr. Sc. LE Thanh Nhan", "Director of Danang International Institute of Technology", "canva-edit/afdee51516b85aa8.webp"],
  ["Dr. DOAN Thi Ngoc Canh", "Responsible for the E-tourism program", "canva-edit/995a51469559bab9.webp"],
  ["Ms. NGUYEN Thi Thu Thanh", "Administrative Manager and International Cooperation, Danang International Institute of Technology", "people/nguyen-thi-thu-thanh.jpg"],
  ["Dr. NGUYEN Thanh Tuan", "Lecturer, University of Danang", "people/nguyen-thanh-tuan.jpg"],
];

const agenda = [
  {
    date: "16 June 2026",
    theme: "Aromas and Perfumes in Tourism",
    chairs: "Chairs: Sylvain Antoniotti and Nguyen Duc Quynh",
    rows: [
      ["08:30 - 08:50", "Welcome"],
      ["08:50 - 09:00", "Performance by students from the Danang Master's program in tourism"],
      ["09:00 - 09:05", "Opening Ceremony, MC"],
      ["09:05 - 09:20", "Presentation of the perfumes and aromas lab at UniCA, Sylvain Antoniotti"],
      ["09:20 - 09:35", "Aromas and perfumes in Vietnam tourism, with video clip, Nguyen Duc Quynh"],
      [
        "09:35 - 09:50",
        "Potential for Product Development from Natural Essential Oil Resources in Central Vietnam, Giang Thi Kim Lien",
      ],
      ["09:50 - 10:05", "Presentation of the Fragonard Group, Fragonard representative"],
      ["10:05 - 10:20", "Presentation of the MENAS Vietnam Group, Pham Ngoc Loi"],
      ["10:20 - 10:40", "Tea break"],
      [
        "10:40 - 11:10",
        "Inter-regional collaboration panel: Sylvain Antoniotti, Christian Sinicropi, Fragonard representative, Nguyen Duc Quynh, Cao Tri Dung, Giang Thi Kim Lien",
      ],
      [
        "11:10 - 11:20",
        "Signing of the Memorandum of Understanding for Collaboration: Fragonard representative, Nguyen Duc Quynh, Cao Tri Dung",
      ],
      ["11:20 - 11:25", "Conclusion, Sylvain Antoniotti"],
      ["11:25 - 12:00", "Move to lunch"],
      ["12:00 - 14:00", "Lunch"],
      ["14:00 - 16:30", "Visit to Fragonard"],
      ["16:30 - 17:00", "Back"],
    ],
  },
  {
    date: "17 June 2026",
    theme: "Luxury Tourism",
    chairs: "Chairs: Franck Sosthe and Cao Tri Dung",
    rows: [
      ["08:30 - 09:00", "Welcome"],
      ["09:00 - 09:05", "Opening Ceremony, MC"],
      [
        "09:05 - 09:20",
        "Demand and requirements of Vietnamese customers for Nice, Cannes and Monaco luxury packages, Cao Tri Dung",
      ],
      ["09:20 - 09:35", "Luxury tourism in France, Bruno Mercadal"],
      [
        "09:35 - 09:50",
        "Applying technology, AI and innovation into luxury tourism segment development in Danang, Pham Ngoc Loi",
      ],
      ["09:50 - 10:05", "Intervention 3, France"],
      [
        "10:05 - 10:20",
        "Air connection for luxury packages between Côte d'Azur and Danang, Le Thi Kim Hanh",
      ],
      ["10:20 - 10:40", "Tea break"],
      [
        "10:40 - 11:10",
        "Inter-regional collaboration panel: Franck Sosthe, Bruno Mercadal, Pascal Brochiero, Nguyen Duc Quynh, Cao Tri Dung, Pham Ngoc Loi",
      ],
      [
        "11:10 - 11:20",
        "Signing of the Memorandum of Understanding for Collaboration: Bruno Mercadal, Pascal Brochiero, Nguyen Duc Quynh, Cao Tri Dung",
      ],
      ["11:20 - 11:25", "Conclusion, Franck Sosthe"],
      ["11:25 - 12:00", "Move to lunch"],
      ["12:00 - 14:00", "Lunch"],
      ["14:00 - 16:30", "Visit to the Royal Riviera Hotel, a five-star hotel in Saint-Jean-Cap-Ferrat"],
      ["16:30 - 17:00", "Back"],
    ],
  },
];

const speakers = [
  ["Chair / Aromas and perfumes in tourism", "Prof. Sylvain Antoniotti", "people/sylvain-antoniotti.jpg"],
  ["Panel Day 16 / Gastronomy and sensory tourism", "Chef Christian Sinicropi", "people/christian-sinicropi.jpg"],
  ["Panel Day 16 / Vietnam aromas in tourism", "Mr. Nguyen Duc Quynh", "canva-edit/4637232ff52fbb74.png"],
  ["Luxury tourism demand", "Dr. Cao Tri Dung", "canva-edit/c1d716f830047cc6.webp"],
  ["Natural essential oil resources", "Assoc. Prof. Dr. Giang Thi Kim Lien", "84494127381d9954.webp"],
  ["Panel Day 17 / Luxury hospitality", "Bruno Mercadal", "people/bruno-mercadal.jpg"],
  ["Panel Day 17 / Destination development", "Pascal Brochiero", "people/pascal-brochiero.jpg"],
  ["AI and innovation in luxury tourism", "Mr. Pham Ngoc Loi", "canva-edit/f72e4e9c869c8da9.webp"],
  ["Air connection for luxury packages", "Ms. Le Thi Kim Hanh", "canva-edit/0ba28b03df33b5f6.png"],
  ["Chair / Master Tourism, ELMI, UniCA", "Prof. Franck Sosthe", "canva-edit/00240ad2bc555c56.png"],
];

const zoomOutNames = new Set(["Prof. Franck Sosthé", "Prof. Franck Sosthe", "Pascal Brochiero"]);
const mediaClass = (name) => (zoomOutNames.has(name) ? "media-zoom-out" : "");

const niceNews = [
  [
    "crops/nice-coast.jpg",
    "La Fete de Mai (Spring Festival)",
    "Updated 19 June 2025",
    "https://seenice.com/events/la-fete-de-mai-spring-festival-674077",
  ],
  [
    "crops/nice-church.jpg",
    "European Night of the Museums",
    "Updated 23 March 2026",
    "https://www.seenice.com/events/calendar/long-night-of-museums",
  ],
  [
    "crops/nice-beach.jpg",
    "Mondes paralleles",
    "Musee International d'Art Naif Anatole Jakovsky",
    "https://www.explorenicecotedazur.com/en/event/mondes-paralleles/",
  ],
  [
    "crops/nice-square.jpg",
    "Fete de la Musique",
    "Location: Chamonix",
    "https://www.seenice.com/events/calendar/fete-de-la-musique-676716",
  ],
];

const danangNews = [
  [
    "crops/danang-city.jpg",
    "DaNang FantastiCity",
    "Vietnamese tourism news",
    "https://danangfantasticity.com/en",
  ],
  [
    "crops/danang-dragon.jpg",
    "DIFF 2026 Ticket Price and Festival Schedule",
    "11/03/2026",
    "https://danangfantasticity.com/en/discovery/ticket-prices-for-the-da-nang-international-fireworks-festival-2026",
  ],
  [
    "crops/danang-bridge.jpg",
    "Explore the natural beauty of Da Nang",
    "11/02/2025",
    "https://danangfantasticity.com/en",
  ],
  [
    "crops/danang-linhung.jpg",
    "Experiencing Rich Culture and Heritage",
    "02/08/2024",
    "https://danangfantasticity.com/en",
  ],
];

const previous = [
  [
    "IMTECAD 2023",
    "Da Nang collaborates with the Côte d'Azur region of France to develop tourism.",
    "https://cadn.com.vn/phong-su/da-nang-hop-tac-phat-trien-du-lich-voi-vung-cote-dazur-phap-post285657.html?gidzl=ebvC0Gb4QXskGqe02bvf7AX0JW0LM6yIu1SS3nTSR1Mr5nW7Gbe-7B16IWCGNsrCjazB0cMJAH4g0qva7W",
  ],
  [
    "IMTECAD 2022",
    "Regional exchange on sustainable destination development and tourism ecosystems.",
    "https://sites.google.com/view/imtecad2022/home?authuser=0",
  ],
];

const galleryImages = [
  [
    "cadn-2023/imtecad-2023-01.jpg",
    "Mr. De Pariente Thomas speaks at the tourism cooperation exchange with Da Nang City (IMTECAD 2023).",
  ],
  ["cadn-2023/imtecad-2023-02.jpg", "Prof. Dr. Sc. Bui Van Ga delivers the opening remarks (IMTECAD 2023)."],
  [
    "cadn-2023/imtecad-2023-03.jpg",
    "Dr. Cao Tri Dung shares expectations for tourism cooperation between the two regions (IMTECAD 2023).",
  ],
  ["cadn-2023/imtecad-2023-04.jpg", "IMTECAD 2023"],
  ["cadn-2023/imtecad-2023-05.jpg", "IMTECAD 2023"],
  ["cadn-2023/imtecad-2023-06.jpg", "IMTECAD 2023"],
  ["cadn-2023/imtecad-2023-07.jpg", "IMTECAD 2023"],
  ["cadn-2023/imtecad-2023-08.jpg", "IMTECAD 2023"],
  ["cadn-2023/imtecad-2023-09.jpg", "IMTECAD 2023"],
  ["cadn-2023/imtecad-2023-10.jpg", "IMTECAD 2023"],
  ["2a1d725866ba236e.webp", "IMTECAD 2026"],
  ["6e7b148705fb8cfa.webp", "IMTECAD 2026"],
];

function Nav() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="home-link" href="#home" aria-label="Home">
        <Home size={22} strokeWidth={3} />
      </a>
      <div className="nav-scroll">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function HeroBand({ id, image, title, eyebrow, subtitle }) {
  return (
    <section id={id} className="band" style={{ "--band-image": `url(${asset(image)})` }}>
      <div className="band-shade" />
      <div className="band-content">
        {eyebrow && <p>{eyebrow}</p>}
        <h2>{title}</h2>
        {subtitle && <strong>{subtitle}</strong>}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main id="home">
      <header className="hero">
        <Image
          src={asset("6e7b148705fb8cfa.webp")}
          alt="Colorful Côte d'Azur coastal city"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="kicker">IMTECAD 2026</p>
          <h1>
            The Inter-regional Meeting in Tourism
            <span>between the Côte d'Azur and Danang</span>
          </h1>
          <p className="hero-lede">
            A Côte d'Azur and Da Nang forum for luxury tourism, creative destination design,
            fragrance experiences, training cooperation and field operations.
          </p>
          <div className="hero-pills">
            <span>
              <CalendarDays size={18} /> 16 - 17 June 2026
            </span>
            <span>
              <MapPin size={18} /> Université Côte d'Azur, Nice, France
            </span>
          </div>
        </div>
        <aside className="hero-card" aria-label="Conference highlights">
          <span>Program Arc</span>
          <strong>Aromas / Perfumes / Luxury Tourism</strong>
          <p>Two specialist workshop days connecting Côte d'Azur and Danang tourism partners.</p>
        </aside>
      </header>

      <Nav />

      <section className="program-strip" aria-label="Conference quick facts">
        <article>
          <span>2 days</span>
          <strong>Program</strong>
          <p>16-17 June 2026</p>
        </article>
        <article>
          <span>2 themes</span>
          <strong>Focus</strong>
          <p>Aromas and luxury tourism</p>
        </article>
        <article>
          <span>2 regions</span>
          <strong>Cooperation</strong>
          <p>Côte d'Azur and Da Nang</p>
        </article>
      </section>

      <section className="intro section">
        <SectionTitle
          eyebrow="Introduction"
          title={
            <>
              <span className="title-main">Welcome to IMTECAD</span>
              <span className="title-year">2026</span>
            </>
          }
        />
        <div className="intro-grid">
          <article>
            <p>
              The Inter-regional Meeting in Tourism between the Côte d'Azur and Danang (IMTECAD)
              2026 is an international event dedicated to fostering cooperation in tourism
              development between the Côte d'Azur, France and Da Nang, Vietnam.
            </p>
            <p>
              The conference aims to promote tourism, strengthen cultural exchange, and build
              sustainable partnerships between the two regions. IMTECAD 2026 serves as a dynamic
              platform for tourism stakeholders, researchers, policymakers, and industry
              professionals to exchange ideas, explore innovative practices, and establish long-term
              collaborations.
            </p>
          </article>
          <aside className="facts">
            <div>
              <CalendarDays />
              <strong>June 16-17, 2026</strong>
              <span>Conference dates</span>
            </div>
            <div>
              <MapPin />
              <strong>Nice, France</strong>
              <span>Université Côte d'Azur</span>
            </div>
            <div>
              <UsersRound />
              <strong>Europe - Southeast Asia</strong>
              <span>Tourism cooperation</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section muted" id="organizers">
        <SectionTitle eyebrow="Partners" title="Organizers">
          Co-organized by tourism, university and hospitality partners connecting Da Nang and the
          Côte d'Azur.
        </SectionTitle>
        <div className="logo-grid">
          {organizers.map((org) => (
            <div className="logo-card" key={`${org.name}-${org.image}`}>
              <Image
                src={asset(org.image)}
                alt={org.name}
                width={320}
                height={150}
                style={{ "--logo-scale": org.zoom ?? 1 }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section committee-section">
        <SectionTitle eyebrow="Committees" title="Conference Committees" />
        <div className="people-grid">
          {committee.map(([name, role, image]) => (
            <article className={`person ${mediaClass(name)}`} key={name}>
              <Image src={asset(image)} alt={name} width={180} height={180} />
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <HeroBand
        id="agenda"
        image="6e7b148705fb8cfa.webp"
        eyebrow="June 16 - June 17, 2026"
        title="Agenda"
        subtitle="Aromas and perfumes in tourism; luxury tourism"
      />
      <section className="section agenda-list">
        {agenda.map((day) => (
          <article className="agenda-day" key={day.date}>
            <h3>{day.date}</h3>
            <strong>{day.theme}</strong>
            <em>{day.chairs}</em>
            <div>
              {day.rows.map(([time, description]) => (
                <p key={`${day.date}-${time}`}>
                  <span>{time}</span>
                  {description}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="section muted" id="speakers">
        <SectionTitle eyebrow="Speakers" title="Sessions, Panels & Contributors" />
        <div className="speaker-grid">
          {speakers.map(([role, name, image]) => (
            <article key={`${role}-${name}`} className={`speaker ${mediaClass(name)}`}>
              <Image src={asset(image)} alt={name} width={220} height={220} />
              <span>{role}</span>
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </section>

      <HeroBand
        id="venue"
        image="2a1d725866ba236e.webp"
        eyebrow="16 - 17 June 2026"
        title="Venue"
        subtitle="Location: Nice, France"
      />
      <section className="section venue">
        <SectionTitle title="Location">
          Université Côte d'Azur, Avenue de Valrose, 06103 Nice CEDEX 2, France.
        </SectionTitle>
        <div className="venue-frame">
          <Image
            src={asset("c5743dd0708b36ef.webp")}
            alt="Côte d'Azur coastline"
            width={736}
            height={1545}
          />
          <div>
            <span>Host campus</span>
            <strong>Université Côte d'Azur</strong>
            <p>Avenue de Valrose, 06103 Nice CEDEX 2, France.</p>
          </div>
        </div>
      </section>

      <section className="section muted" id="previous">
        <SectionTitle eyebrow="Previous Conference" title="IMTECAD Archive" />
        <div className="previous-grid">
          {previous.map(([year, text, href]) => (
            <a key={year} href={href} target="_blank" rel="noreferrer">
              <Newspaper />
              <h3>{year}</h3>
              <p>{text}</p>
              <span className="card-link">Open archive</span>
            </a>
          ))}
        </div>
      </section>

      <HeroBand id="nice-news" image="c5743dd0708b36ef.webp" title="Nice Travel News" />
      <section className="section image-news">
        {niceNews.map(([image, title, meta, href]) => (
          <a key={image} href={href} target="_blank" rel="noreferrer">
            <Image src={asset(image)} alt="" width={450} height={320} />
            <h3>{title}</h3>
            <p>{meta}</p>
            <span className="card-link">Read article</span>
          </a>
        ))}
      </section>

      <HeroBand id="danang-news" image="crops/danang-bridge.jpg" title="Da Nang Travel News" />
      <section className="section image-news">
        {danangNews.map(([image, title, meta, href]) => (
          <a key={image} href={href} target="_blank" rel="noreferrer">
            <Image src={asset(image)} alt="" width={450} height={320} />
            <h3>{title}</h3>
            <p>{meta}</p>
            <span className="card-link">Read article</span>
          </a>
        ))}
      </section>

      <HeroBand id="galleries" image="crops/nice-coast.jpg" title="Galleries" />
      <section className="section gallery">
        <h2>Events</h2>
        <div>
          {galleryImages.map(([image, title]) => (
            <figure key={image}>
              <Image src={asset(image)} alt={title} width={420} height={320} />
              <figcaption>{title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <h2>IMTECAD 2026</h2>
          <p>Danang International Institute of Technology - DNIIT</p>
          <p>Phòng 602-604, Khu B, Đại học Đà Nẵng, 41 Lê Duẩn, TP. Đà Nẵng</p>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com/dniit.dn/" aria-label="Facebook" className="facebook-mark">
            f
          </a>
          <a href="mailto:contact@dniit.udn.vn" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </footer>
    </main>
  );
}
