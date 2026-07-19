// Service catalogue shared by the services listing, detail pages and popups.
// `icon` stores a lucide-react icon name (resolved via the Icons namespace)
// so this stays a plain data module with no JSX.

export const SERVICES = [
  {
    slug: "website-development",
    title: "Website Development",
    icon: "Globe",
    description: "Fast, responsive websites that turn visitors into customers.",
    tagline: "Websites built to load quickly, rank well, and convert.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=600",
    overview:
      "We build marketing sites, landing pages, and web platforms that are quick to load and easy to manage. Every page is designed around your customers and the actions you want them to take, then handed over with a content system your team can update without a developer.",
    features: [
      {
        title: "Conversion-first design",
        desc: "Layouts and copy structured around the goals that grow your business.",
      },
      {
        title: "Built for speed",
        desc: "Optimised code and assets so your pages open in under two seconds.",
      },
      {
        title: "Search-ready",
        desc: "Clean markup, sensible structure, and metadata search engines reward.",
      },
      {
        title: "Easy to manage",
        desc: "Update text, images, and pages yourself with a simple editing dashboard.",
      },
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "SEO", "CMS"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "BarChart3",
    description: "Campaigns that bring the right people to your business.",
    tagline: "Marketing that is measured, honest, and tied to real revenue.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    overview:
      "We plan and run marketing that pays for itself. From search and social ads to email and content, we focus on the channels that reach your customers and report on the numbers that actually matter, so you always know what your budget is doing.",
    features: [
      {
        title: "Paid search & social",
        desc: "Targeted Google and Meta campaigns tuned around cost per lead.",
      },
      {
        title: "SEO & content",
        desc: "Articles and pages that earn steady traffic month after month.",
      },
      {
        title: "Email & retention",
        desc: "Sequences that bring past customers back and keep them engaged.",
      },
      {
        title: "Clear reporting",
        desc: "Plain-language dashboards showing spend, leads, and return.",
      },
    ],
    tags: ["Google Ads", "Meta Ads", "SEO", "Email", "Analytics"],
  },
  {
    slug: "software-development",
    title: "Software Development",
    icon: "Code",
    description: "Custom platforms that fit exactly how your team works.",
    tagline: "Software shaped around your process, not the other way round.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600",
    overview:
      "When off-the-shelf tools stop keeping up, we build software that matches your workflow. From internal dashboards to full business platforms, we design systems that remove manual work, keep your data in one place, and grow with you as demand increases.",
    features: [
      {
        title: "Tailored workflows",
        desc: "Tools built around the exact steps your team follows every day.",
      },
      {
        title: "Scalable backends",
        desc: "Architecture that stays reliable as your users and data grow.",
      },
      {
        title: "Integrations",
        desc: "Connect the payment, CRM, and data tools you already depend on.",
      },
      {
        title: "Secure by default",
        desc: "Access controls and encryption applied from the first commit.",
      },
    ],
    tags: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Cloud"],
  },
  {
    slug: "app-development",
    title: "App Development",
    icon: "Smartphone",
    description: "Mobile apps people keep on their home screen.",
    tagline: "iOS and Android apps that feel quick, clear, and dependable.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
    overview:
      "We design and build mobile apps that people genuinely enjoy using. With a single codebase for iOS and Android, you reach both stores faster and pay less to maintain, while your users get smooth performance and an interface that just makes sense.",
    features: [
      {
        title: "iOS & Android",
        desc: "One shared codebase that ships to both app stores at once.",
      },
      {
        title: "Native feel",
        desc: "Fluid gestures and animations that respond the instant you tap.",
      },
      {
        title: "Offline support",
        desc: "Core features keep working even when the connection drops.",
      },
      {
        title: "Store launch help",
        desc: "We handle submission, review, and the first release for you.",
      },
    ],
    tags: ["React Native", "Swift", "Kotlin", "Firebase", "Expo"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "Layers",
    description: "Interfaces that are clear, considered, and easy to use.",
    tagline: "Design that helps people finish what they came to do.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    overview:
      "Good design is invisible, it simply gets people where they want to go. We research your users, map their journeys, and craft interfaces that reduce friction at every step, then hand over a design system your developers can build from with confidence.",
    features: [
      {
        title: "User research",
        desc: "We learn how your customers think before a pixel is drawn.",
      },
      {
        title: "Prototypes",
        desc: "Clickable mockups let you test ideas before we write code.",
      },
      {
        title: "Design systems",
        desc: "Reusable components that keep every screen consistent.",
      },
      {
        title: "Accessibility",
        desc: "Interfaces everyone can use, tested against WCAG guidelines.",
      },
    ],
    tags: ["Figma", "Prototyping", "Design Systems", "Wireframes", "WCAG"],
  },
  {
    slug: "ai-automation",
    title: "AI & Intelligent Automation",
    icon: "Cpu",
    description: "Practical automation that saves your team real hours.",
    tagline: "Quiet automation that handles the repetitive work for you.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    overview:
      "We find the slow, repetitive tasks in your day and hand them to software. From support chatbots that answer common questions to workflows that move data between your tools automatically, we build automation that frees your team to focus on work that needs a human.",
    features: [
      {
        title: "Support chatbots",
        desc: "Assistants that answer routine questions around the clock.",
      },
      {
        title: "Workflow automation",
        desc: "Connect your tools so data moves without copy and paste.",
      },
      {
        title: "Document handling",
        desc: "Pull key details from invoices, forms, and emails in seconds.",
      },
      {
        title: "Human handover",
        desc: "Anything tricky is passed to your team with full context.",
      },
    ],
    tags: ["OpenAI", "LangChain", "n8n", "Zapier", "Make"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud & DevOps Engineering",
    icon: "Cloud",
    description: "Dependable cloud setups that scale without runaway costs.",
    tagline: "Cloud infrastructure that stays fast, secure, and predictable.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    overview:
      "We set up and look after the cloud infrastructure your product runs on, so it stays online, scales the moment traffic spikes, and never lands you with a bill you didn't expect. From the first deployment to day-to-day monitoring, we handle the plumbing while you focus on the business.",
    features: [
      {
        title: "Right-sized hosting",
        desc: "Infrastructure matched to real usage, so you never pay for idle servers.",
      },
      {
        title: "Scales on demand",
        desc: "Capacity grows automatically when traffic climbs, then settles back down.",
      },
      {
        title: "Automated deploys",
        desc: "Every change ships through a tested pipeline with one-click rollback.",
      },
      {
        title: "Always monitored",
        desc: "Alerts, backups, and health checks keep problems small and rare.",
      },
    ],
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
];

export function getService(slug) {
  return SERVICES.find((service) => service.slug === slug);
}
