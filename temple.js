const jyotirlingaTemples = [
  {
    slug: "somnath", order: 1, name: "Somnath", hindi: "सोमनाथ", state: "Gujarat", location: "Prabhas Patan, Gir Somnath",
    videoId: "Wp6K3HcZqsQ",
    intro: "Set beside the Arabian Sea at Prabhas Patan, Somnath is revered as the first Aadi Jyotirlinga. The present temple, rebuilt after independence, makes a powerful coastal stop on a Gujarat road journey.",
    darshan: "General darshan is listed from 6:00 AM to 10:00 PM. Aarti is held at 7:00 AM, 12:00 noon and 7:00 PM; the Trust also lists an evening sound-and-light show. Phones, cameras and other electronics are not permitted inside, so use the cloakroom before joining the queue.",
    travel: "Pair the temple with the shore-side evening and nearby Prabhas heritage stops. Stay close to the temple if you want an unhurried early darshan; the Trust also publishes its own guest-house information.",
    sourceName: "Shree Somnath Trust — FAQ & pilgrim facilities", sourceUrl: "https://somnath.org/faq/"
  },
  {
    slug: "mallikarjuna", order: 2, name: "Mallikarjuna", hindi: "मल्लिकार्जुन", state: "Andhra Pradesh", location: "Srisailam, Nandyal district",
    videoId: "zKk8mg73W-A",
    intro: "Mallikarjuna Swamy stands in Srisailam, in the forested hills above the Krishna River. It is a rare combined pilgrimage: Mallikarjuna is a Jyotirlinga and Bhramaramba Devi in the same complex is counted among the major Shakti Peethas.",
    darshan: "Use the Devasthanam portal for the current darshan, seva and accommodation schedule. Current published schedules commonly show public darshan in the morning through mid-afternoon and again in the evening, with ritual closures between; festival-day arrangements can be very different.",
    travel: "Treat the approach as a hill-and-forest drive: arrive in daylight, keep fuel topped up before the ghat section, and leave time for Bhramaramba Devi darshan as well as Mallikarjuna.",
    sourceName: "Sri Bhramaramba Mallikarjuna Swamy Devasthanam", sourceUrl: "https://www.srisailadevasthanam.org/"
  },
  {
    slug: "mahakaleshwar", order: 3, name: "Mahakaleshwar", hindi: "महाकालेश्वर", state: "Madhya Pradesh", location: "Ujjain",
    videoId: "TeznNVI1np8",
    intro: "Mahakaleshwar is Ujjain's Jyotirlinga shrine, where Shiva is worshipped as Mahakal, the lord of time. The temple complex and the nearby Mahakal Lok make this an immersive city stop rather than a quick highway halt.",
    darshan: "The signature Bhasma Aarti is performed daily at 4:00 AM and requires an official booking. The temple committee publishes regular and Tatkal booking windows, plus Sheeghra Darshan and other aarti services; book only through its official portal.",
    travel: "Reach the queue well before your booked time, keep a separate slot for Ram Ghat and the Mahakal Lok corridor, and avoid treating an aarti booking as a flexible arrival time.",
    sourceName: "Shri Mahakaleshwar Temple Management Committee", sourceUrl: "https://www.shrimahakaleshwar.mp.gov.in/"
  },
  {
    slug: "omkareshwar", order: 4, name: "Omkareshwar", hindi: "ओंकारेश्वर", state: "Madhya Pradesh", location: "Omkareshwar, Khandwa",
    videoId: "6wnD0QR7VQw",
    intro: "Omkareshwar sits on the Narmada at the sacred island town associated with the shape of Om. The official temple describes it as the fourth Jyotirlinga and places it about 77 km from Indore.",
    darshan: "The official timetable lists Mangal Darshan from 5:00 AM, a midday bhog break, afternoon darshan from 1:15 PM, and Shringar Darshan through 9:30 PM. Darshan pauses during aarti and shringar, and the shrine closes after 10:30 PM.",
    travel: "Cross the Narmada early, walk the island at a calmer pace, and do not schedule the visit too tightly around aarti breaks. It works naturally with a Mahakaleshwar–Indore road leg.",
    sourceName: "Shri Omkareshwar Jyotirlinga — official timetable", sourceUrl: "https://www.shriomkareshwar.org/OnlineTicketAvailabilty.aspx"
  },
  {
    slug: "kedarnath", order: 5, name: "Kedarnath", hindi: "केदारनाथ", state: "Uttarakhand", location: "Kedarnath, Rudraprayag",
    videoId: "T35tGbbkqZU",
    intro: "High in the Garhwal Himalaya, Kedarnath is both a Jyotirlinga and a Chota Char Dham shrine. Its pilgrimage is fundamentally different from the other eleven: it involves seasonal access, registration, mountain weather and the onward journey from Gaurikund.",
    darshan: "Register every pilgrim and vehicle through the official Uttarakhand Yatra portal before travel. The temple committee publishes seasonal puja options and says the yatra season is generally May to October/November; day-to-day access depends on weather, safety and crowd controls.",
    travel: "Build in spare days, start the trek or helicopter plan only after checking live weather and route advisories, carry layers and rain protection, and never count on late-day mountain travel.",
    sourceName: "Uttarakhand Tourism — Kedarnath & Yatra registration", sourceUrl: "https://registrationandtouristcare.uk.gov.in/"
  },
  {
    slug: "bhimashankar", order: 6, name: "Bhimashankar", hindi: "भीमाशंकर", state: "Maharashtra", location: "Pune district, Sahyadri hills",
    videoId: "8io8QV0Y380",
    intro: "Bhimashankar lies amid the Sahyadri landscape and wildlife sanctuary, blending a Jyotirlinga visit with a dramatic forest-road experience. The setting is especially beautiful in and after the monsoon, but road and crowd conditions need extra care.",
    darshan: "The temple's own schedule normally lists multiple darshan windows from early morning to night. Its current notice says construction work has temporarily limited darshan to 7:00 AM–11:00 AM, so check the official page immediately before leaving and plan around the active notice, not an old itinerary.",
    travel: "Start from Pune or the surrounding region early, avoid pushing a wet or foggy ghat road after dark, and carry rain protection in the monsoon. Leave the sanctuary as clean as you found it.",
    sourceName: "Shri Kshetra Bhimashankar — temple schedule", sourceUrl: "https://shreebhimashankar.com/en/temple-schedule/"
  },
  {
    slug: "kashi-vishwanath", order: 7, name: "Kashi Vishwanath", hindi: "काशी विश्वनाथ", state: "Uttar Pradesh", location: "Varanasi",
    videoId: "e6HNpDFeeEg",
    intro: "Kashi Vishwanath is in the old heart of Varanasi, adjoining the Kashi Vishwanath Dham corridor and the Ganga ghats. Plan it as a walking pilgrimage: the approach lanes, security process and the riverfront are all part of the experience.",
    darshan: "The official schedule opens with Mangala Aarti around 2:45 AM and ends after Shayan Aarti at 11:00 PM. General darshan pauses around major aartis; Mangala Aarti needs a valid ticket. Use the Trust's official Sugam Darshan and aarti services if you need a booked slot.",
    travel: "Travel light: the official FAQ says electronic and non-electronic gadgets are not allowed inside. Choose your gate and locker plan before entering the old-city lanes, then keep time for a ghat walk after darshan.",
    sourceName: "Shri Kashi Vishwanath Temple Trust — rituals and schedule", sourceUrl: "https://www.shrikashivishwanath.org/general/rituals"
  },
  {
    slug: "trimbakeshwar", order: 8, name: "Trimbakeshwar", hindi: "त्र्यंबकेश्वर", state: "Maharashtra", location: "Trimbak, Nashik district",
    videoId: "uUo1CEYKeQU",
    intro: "Trimbakeshwar stands near the source region of the Godavari at the foot of Brahmagiri. Its Jyotirlinga is distinctive in tradition for its three-faced form representing Brahma, Vishnu and Shiva.",
    darshan: "The Devasthan Trust lists darshan daily from 5:30 AM to 9:00 PM. Crowd patterns change sharply in Shravan and around major observances, so an opening-time visit is the most dependable way to keep a road-trip day moving.",
    travel: "Stay in or near Nashik if possible, arrive ready for an early queue, and reserve additional time for Brahmagiri/Gangadwar only when weather and energy allow.",
    sourceName: "Shri Trimbakeshwar Devasthan Trust", sourceUrl: "https://www.trimbakeshwartrust.com/"
  },
  {
    slug: "baidyanath", order: 9, name: "Baidyanath", hindi: "बैद्यनाथ", state: "Jharkhand", location: "Deoghar",
    videoId: "ybHt95Gmqdc",
    intro: "Baba Baidyanath Dham anchors Deoghar's temple town and is one of the twelve Jyotirlingas. The wider complex includes many smaller shrines, so a little unhurried time makes the visit far more meaningful than a single queue run.",
    darshan: "Government tourism information lists regular darshan from 4:00 AM–2:00 PM and 6:00 PM–8:00 PM. During Shravan, the Kanwar Yatra brings extraordinary footfall and management arrangements may change completely—verify local advisories before making fixed connections.",
    travel: "Deoghar, Baidyanathdham and Jasidih are the main rail touchpoints. In Shravan, arrive with much more time than usual and keep your accommodation and onward transport flexible.",
    sourceName: "Incredible India — Baba Baidyanath Dham", sourceUrl: "https://www.incredibleindia.gov.in/en/jharkhand/deoghar/baba-baidyanath-dham"
  },
  {
    slug: "nageshwar", order: 10, name: "Nageshwar", hindi: "नागेश्वर", state: "Gujarat", location: "Daarukavanam, near Dwarka",
    videoId: "2FP3UIKx-ew",
    intro: "Nageshwar is the Jyotirlinga stop near Dwarka on Gujarat's coast. Its location makes it ideal to combine with Dwarkadhish, Bet Dwarka and the coastal road rather than treating it as a separate overnight detour.",
    darshan: "The Nageshwar Trust lists general darshan from 6:00 AM to 9:00 PM, with morning aarti at 5:30 AM and evening aarti at 7:30 PM. The Trust specifically asks visitors to reconfirm on festival and special-pooja days.",
    travel: "Keep enough daylight for the Dwarka circuit and leave your seaside sightseeing for after darshan. The coastal wind can be strong, so secure loose camera gear and travel essentials.",
    sourceName: "Official Nageshwar Jyotirlinga Trust", sourceUrl: "https://nageshwarjyotirling.org/about-mandir"
  },
  {
    slug: "rameshwaram", order: 11, name: "Ramanathaswamy (Rameshwaram)", hindi: "रामनाथस्वामी", state: "Tamil Nadu", location: "Rameswaram Island",
    videoId: "9Li2sLeXV-U",
    intro: "Ramanathaswamy Temple on Rameswaram Island is the southern Jyotirlinga, known for its vast pillared corridors and the traditional sacred-well circuit. It rewards an early, deliberately paced visit.",
    darshan: "The Tamil Nadu HR&CE temple site lists public darshan at 5:00–6:00 AM for Spatika Linga, 6:10 AM–1:00 PM for the main sanctum, and 3:15–8:00 PM in the evening. The 22 theertham bathing circuit has separate operating windows, so check the day’s notice before planning the sequence.",
    travel: "Give the temple a full morning if you intend to include the theerthams. Add Pamban, Dhanushkodi or the island coast as a separate light-and-weather-dependent leg rather than rushing everything into one slot.",
    sourceName: "Arulmigu Ramanathaswamy Temple — Tamil Nadu HR&CE", sourceUrl: "https://rameswaramramanathar.hrce.tn.gov.in/"
  },
  {
    slug: "grishneshwar", order: 12, name: "Grishneshwar", hindi: "घृष्णेश्वर", state: "Maharashtra", location: "Verul, near Ellora",
    videoId: "8io8QV0Y380",
    intro: "Grishneshwar in Verul is the Jyotirlinga beside the Ellora Caves, making it one of the most rewarding places to combine living worship with a major heritage visit. The red-stone temple is commonly visited as the twelfth Jyotirlinga.",
    darshan: "The temple's official site lists darshan from 5:30 AM–12:00 PM and 1:00–9:00 PM, with a noon break. It also lists morning, bhog and evening aartis. Reconfirm hours and entry rules locally before travel, especially in Shravan and on festival dates.",
    travel: "Start with an early darshan, then give Ellora its own time and energy. Keep a full day in the Verul area if you want to see the caves properly rather than only stopping for a photograph.",
    sourceName: "Grishneshwar Jyotirlinga — official daily schedule", sourceUrl: "https://grishneshwarjyotirling.org/"
  }
];

function templeEscape(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
}

function templeLink(temple) {
  return document.body.dataset.temple ? `${temple.slug}.html` : `temples/${temple.slug}.html`;
}

function renderTempleCards(target) {
  if (!target) return;
  target.innerHTML = jyotirlingaTemples.map((temple) => `
    <article class="temple-card">
      <a href="${templeLink(temple)}" aria-label="Read the ${templeEscape(temple.name)} darshan guide">
        <img src="https://i.ytimg.com/vi/${temple.videoId}/hqdefault.jpg" alt="Ghummakad Manav's ${templeEscape(temple.name)} journey" loading="lazy">
        <div class="temple-card-copy">
          <span class="temple-number">Jyotirlinga ${temple.order}</span>
          <h3>${templeEscape(temple.name)}</h3>
          <p>${templeEscape(temple.location)}, ${templeEscape(temple.state)}</p>
          <span class="temple-card-link">Read darshan guide <i data-lucide="arrow-up-right"></i></span>
        </div>
      </a>
    </article>`).join("");
  window.lucide?.createIcons();
}

function renderTemplePage(temple) {
  const target = document.querySelector("#templePage");
  if (!target) return;
  const next = jyotirlingaTemples[(jyotirlingaTemples.indexOf(temple) + 1) % jyotirlingaTemples.length];
  document.title = `${temple.name} Darshan Guide | Ghummakad Manav`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = `Plan a visit to ${temple.name}: darshan information, road-trip notes and official source links from Ghummakad Manav.`;
  target.innerHTML = `
    <header class="site-header">
      <a class="brand" href="../index.html" aria-label="Ghummakad Manav home"><img src="../assets/profile.jpg" alt="Ghummakad Manav profile photo"><span>Ghummakad Manav</span></a>
      <button class="icon-button menu-button" type="button" aria-label="Open menu" aria-expanded="false"><i data-lucide="menu"></i></button>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="../index.html">Home</a><a href="../jyotirlingas.html">All 12</a><a href="../index.html#route">Route</a><a href="../index.html#videos">Videos</a>
      </nav>
    </header>
    <main>
      <section class="temple-hero">
        <img class="temple-hero-image" src="https://i.ytimg.com/vi/${temple.videoId}/maxresdefault.jpg" alt="Ghummakad Manav's journey to ${templeEscape(temple.name)}" onerror="this.src='https://i.ytimg.com/vi/${temple.videoId}/hqdefault.jpg'">
        <div class="temple-hero-overlay"></div>
        <div class="temple-hero-content">
          <p class="eyebrow">Jyotirlinga ${temple.order} of 12 · ${templeEscape(temple.state)}</p>
          <h1>${templeEscape(temple.name)}</h1>
          <p>${templeEscape(temple.hindi)} · ${templeEscape(temple.location)}</p>
        </div>
      </section>
      <section class="section section-bright">
        <div class="section-inner temple-intro-grid">
          <div><p class="eyebrow">About the shrine</p><h2>A pilgrimage stop with its own rhythm</h2><p>${templeEscape(temple.intro)}</p></div>
          <aside class="temple-facts"><div><i data-lucide="map-pin"></i><span><strong>Location</strong>${templeEscape(temple.location)}, ${templeEscape(temple.state)}</span></div><div><i data-lucide="route"></i><span><strong>Road-trip note</strong>Plan a dedicated temple window; queues and access rules change by date.</span></div></aside>
        </div>
      </section>
      <section class="section">
        <div class="section-inner darshan-grid">
          <article class="darshan-card"><i data-lucide="clock-3"></i><p class="eyebrow">Darshan information</p><h2>Before you join the queue</h2><p>${templeEscape(temple.darshan)}</p><a class="text-link" href="${temple.sourceUrl}" target="_blank" rel="noreferrer">Check ${templeEscape(temple.sourceName)} <i data-lucide="external-link"></i></a></article>
          <article class="darshan-card"><i data-lucide="car-front"></i><p class="eyebrow">Travel notes</p><h2>Make room for the journey</h2><p>${templeEscape(temple.travel)}</p><p class="notice">Timings, passes and security rules can change without notice. Confirm the linked official source shortly before departure.</p></article>
        </div>
      </section>
      <section class="section section-deep"><div class="section-inner next-temple"><div><p class="eyebrow">Continue the yatra</p><h2>Next: ${templeEscape(next.name)}</h2><p>Move through the complete 12 Jyotirlinga collection at your own pace.</p></div><div class="next-actions"><a class="button button-secondary" href="${templeLink(next)}">Next guide <i data-lucide="arrow-right"></i></a><a class="button button-secondary" href="../jyotirlingas.html">View all 12</a></div></div></section>
    </main>
    <footer class="site-footer"><p>Ghummakad Manav · 12 Jyotirlinga Solo Road Trip</p><a href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'}); return false;">Back to top</a></footer>`;
  window.lucide?.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  const slug = document.body.dataset.temple;
  if (slug) renderTemplePage(jyotirlingaTemples.find((temple) => temple.slug === slug) || jyotirlingaTemples[0]);
  renderTempleCards(document.querySelector("#templeGrid"));
  renderTempleCards(document.querySelector("#templeHubGrid"));
});
