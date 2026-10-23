// Edit this file to update the whole portfolio. Replace the YOUR_* placeholders.
export const profile = {
  name: "Pradip Yadav",
  roles: ["secure backends", "real-time apps", "fuzzy matching engines", "full-stack products"],
  tagline:
    "Software engineer at Affluense.ai. I build licence-gated, encrypted services and real-time web apps, and I solve algorithm problems for fun.",
  location: "Sambhaji Nagar, Maharashtra · Bengaluru",
  links: {
    github: "https://github.com/pradipy865",
    leetcode: "https://leetcode.com/u/pradipdy98/",
    codeforces: "https://codeforces.com/profile/YOUR_CODEFORCES",
    resume: "/resume.pdf", // put your PDF in /public/resume.pdf
  },
};

export const stats = [
  { value: "1993", label: "LeetCode rating (Knight)", note: "900+ problems solved" },
  { value: "1646", label: "Codeforces peak (Expert)", note: "" },
  { value: "1817", label: "CodeChef max (4 star)", note: "" },
  { value: "5M", label: "profiles matched at Affluense", note: "against an encrypted dataset" },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Affluense.ai",
    place: "Bengaluru",
    period: "Present",
    points: [
      "Built a Docker-based customer matching platform (Python, FastAPI, SQLCipher) that matches customer records against an encrypted dataset of 5M profiles.",
      "Implemented licence-gated access with RSA-based secure communication, machine-bound licensing and renewable leases for encrypted database access.",
      "Developed a fuzzy matching engine for PAN, mobile, email and name using phonetic matching, typo tolerance and indexed lookups, exposed through REST APIs with batch processing.",
    ],
  },
  {
    role: "SDE Intern",
    company: "TripFactory",
    place: "Bengaluru",
    period: "Jan 2026 to Jul 2026",
    points: [
      "Engineered authentication with email and mobile OTP and Google OAuth 2.0, streamlining onboarding and login.",
      "Built RESTful APIs secured with JWT to block unauthorized access.",
      "Developed a BFS-based crawler with Playwright and Java to extract hotel, room and dining data.",
    ],
  },
];

export const projects = [
  {
    title: "MediConnect",
    subtitle: "AI-driven health-tech platform",
    description:
      "A MERN healthcare platform that reads prescriptions from images or text with Google Gemini, then matches the drugs against live pharmacy stock.",
    highlights: [
      "Gemini-powered prescription parser with a fallback parser for API outages",
      "JWT auth with Redis token blacklisting",
      "Razorpay payments and Multer uploads up to 10MB",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Redis", "Gemini API", "Razorpay"],
    github: "https://github.com/pradipy865/MediWebApp",
    live: "", // paste live demo URL
  },
  {
    title: "QuickRide",
    subtitle: "Live ride booking system",
    description:
      "A real-time ride-hailing app with separate rider and driver interfaces, live location tracking and instant ride status updates.",
    highlights: [
      "Socket.io for two-way live updates",
      "Google Maps routing and location services",
      "Ride matching between riders and drivers",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Google Maps"],
    github: "https://github.com/pradipy865",
    live: "",
  },
];

export const skills = {
  Languages: ["C", "C++", "JavaScript", "SQL"],
  Frontend: ["React.js", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js", "RESTful APIs", "JWT", "Socket.io"],
  Databases: ["MongoDB", "Mongoose", "MySQL", "Redis"],
  Concepts: ["Data Structures & Algorithms", "Operating Systems", "OOP", "System Design", "DBMS"],
  Tools: ["Git", "GitHub", "Docker", "VS Code"],
};

export const education = [
  { title: "B.Tech, Information Technology", place: "IIIT Allahabad", period: "Nov 2022 to 2026" },
  { title: "XII, Science", place: "Vidyadham Science Junior College, Sambhaji Nagar", period: "2021 · 95.6%" },
];

export const achievements = [
  "99.53 percentile in JEE Main (AIR 4343) and qualified JEE Advanced",
  "98.91 percentile in MHT-CET",
  "Expert on Codeforces, peak rating 1646",
  "Knight on LeetCode, rating 1993, 900+ problems solved",
  "4-star on CodeChef, max rating 1817",
];
