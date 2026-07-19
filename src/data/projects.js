// Portfolio projects shared by the home grid, listing page and detail pages.
export const PROJECTS = [
  {
    slug: "digital24-platform",
    title: "Digital24",
    subtitle: "In-house Product",
    description:
      "Our own platform for ordering and tracking digital services in one place.",
    image: "/Images/digital-marketing-dashboard.jpeg",
    tech: ["Our Product", "SaaS Platform"],
    year: "2025",
    client: "NadirSoft (In-house)",
    services: ["Software Development", "UI/UX Design"],
    summary:
      "Digital24 is our own platform, built in-house so clients can order and track the digital services we deliver from a single, clear dashboard.",
    challenge:
      "We were running our own service work across email and spreadsheets, which was slow to track and impossible to scale cleanly as more clients came on board each month.",
    solution:
      "So we built Digital24 for ourselves: a dashboard where clients place and follow every order, with live status, invoicing, and reporting built in. It now runs a large part of our day-to-day operation.",
    results: [
      { value: "48%", label: "More repeat orders" },
      { value: "6 hrs", label: "Saved per week" },
      { value: "2x", label: "Faster turnaround" },
    ],
  },
  {
    slug: "doreche-inventory-system",
    title: "Doreche Inventory",
    subtitle: "Software Development",
    description:
      "A factory inventory system that cut stock errors to near zero.",
    image: "/Images/fabric-inventory-dashboard.jpeg",
    tech: ["Inventory System", "Web App"],
    year: "2025",
    client: "Doreche Textiles",
    services: ["Software Development", "UI/UX Design"],
    summary:
      "A fabric manufacturer needed real-time visibility into lots, production runs, and stock across the factory floor.",
    challenge:
      "Fabric lots and production were tracked on paper and memory, which meant frequent shortages, double bookings, and no clear picture of what was actually in stock at any moment.",
    solution:
      "We built a management platform that tracks every lot, design, and production run in real time, with dashboards for the floor and the office. Staff log activity from any device and managers see live stock and assignments instantly.",
    results: [
      { value: "99%", label: "Stock accuracy" },
      { value: "40%", label: "Less admin time" },
      { value: "0", label: "Paper records" },
    ],
  },
  {
    slug: "aether-nexus-finance",
    title: "Aether Nexus",
    subtitle: "Web Development",
    description:
      "A portfolio dashboard tracking assets and market data in real time.",
    image: "/Images/crypto-finance-dashboard.jpeg",
    tech: ["FinTech", "Real-time Data"],
    year: "2026",
    client: "Aether Nexus",
    services: ["Website Development", "UI/UX Design"],
    summary:
      "A finance startup wanted a clear, trustworthy dashboard for clients to follow their holdings and the wider market.",
    challenge:
      "Their users juggled several apps to see balances, market movement, and activity, and the numbers rarely lined up. They needed one calm, reliable view they could check at a glance.",
    solution:
      "We designed a responsive dashboard that pulls live pricing and account data into a single screen, with portfolio value, top movers, and a clean activity feed. Everything updates in real time and reads clearly on mobile.",
    results: [
      { value: "1.4s", label: "Average load time" },
      { value: "3x", label: "Longer sessions" },
      { value: "24/7", label: "Live market data" },
    ],
  },
  {
    slug: "ndnd-gypsum-website",
    title: "NDND Gypsum",
    subtitle: "Website Development",
    description:
      "A lead-generating website for a Dubai gypsum partition specialist.",
    image: "/Images/gypsum-partition-website.jpeg",
    tech: ["Website", "Lead Generation"],
    year: "2025",
    client: "NDND Interiors",
    services: ["Website Development", "UI/UX Design", "Digital Marketing"],
    summary:
      "A Dubai gypsum and partition contractor needed a website that turned local searches into estimate requests.",
    challenge:
      "The business relied on word of mouth and had no online presence, so it missed the steady stream of customers searching for partition and ceiling work across Dubai every day.",
    solution:
      "We built a fast, mobile-first site with clear service pages, a prominent call button, and simple estimate forms. Local SEO and a tap-to-call header make it effortless for nearby customers to get in touch.",
    results: [
      { value: "30+", label: "Leads per month" },
      { value: "#1", label: "Local search page" },
      { value: "3s", label: "Mobile load time" },
    ],
  },
  {
    slug: "clearpath-disposal-website",
    title: "ClearPath Disposal",
    subtitle: "Website Development",
    description:
      "A booking-ready website for a junk removal and recycling service.",
    image: "/Images/clearpath-disposal-website.jpeg",
    tech: ["Website", "Online Booking"],
    year: "2026",
    client: "ClearPath Disposal",
    services: ["Website Development", "UI/UX Design"],
    summary:
      "A junk removal company wanted a website that let customers book a pickup in a couple of taps.",
    challenge:
      "Every job started with a phone call, which meant missed enquiries after hours and a lot of time spent quoting jobs that never converted into bookings.",
    solution:
      "We built a clean site with service tiers, instant quote prompts, and an online pickup scheduler. Clear pricing and a friendly booking flow let customers commit without ever picking up the phone.",
    results: [
      { value: "55%", label: "Bookings made online" },
      { value: "2 min", label: "To schedule a pickup" },
      { value: "4.9", label: "Average review score" },
    ],
  },
];

export function getProject(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}
