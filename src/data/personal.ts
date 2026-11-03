// ── Personal Information — Single source of truth ──
// Edit these values to customize the portfolio content.

export const personal = {
  name: "HARISH G S",
  firstName: "Harish",
  greeting: "Hi, I'm",
  role: "Full-Stack Developer",
  secondaryRole: "Backend Engineer · Problem Solver",
  roles: [
    "Full-Stack Developer",
    "Backend Engineer",
    "Problem Solver",
  ],
  tagline:
    "Building scalable, efficient & elegant software while continuously learning and solving meaningful technical problems.",
  description:
    "Computer Science & Engineering student passionate about developing reliable software, solving challenging problems and continuously learning modern technologies.",
  about:
    "I'm a Computer Science & Engineering student at Anna University, Chennai, with a strong interest in full-stack development and backend engineering. I enjoy turning ideas into practical software, solving programming problems, learning modern technologies and building systems that are scalable, efficient and easy to use.",
  education: {
    degree: "B.E. Computer Science & Engineering",
    university: "Anna University, Chennai",
  },
  location: "Namakkal, Tamil Nadu, India",
  focus: "Full-Stack Development & Backend Engineering",
  mindset: "Learn → Build → Improve → Repeat",
} as const;

export const educationTimeline = [
  {
    id: "school",
    level: "CLASS 10",
    institution: "Sri Ramakrishna Matric. School",
    logo: "/logos/sri-ramakrishna.png",
    description:
      "Built a strong academic foundation and developed curiosity for learning.",
    tags: ["Foundation", "Basics", "Curiosity"],
    isCurrent: false,
  },
  {
    id: "hsc",
    level: "CLASS 12",
    institution: "Vivekananda Matric. Hr. Secondary School",
    logo: "/logos/vivekananda.jpg",
    description:
      "Explored my interests, strengthened problem-solving skills and prepared for higher education.",
    tags: ["Focus", "Growth", "Preparation"],
    isCurrent: false,
  },
  {
    id: "college",
    level: "B.E. – CSE",
    institution: "MIT, Anna University",
    logo: "/logos/mit.png",
    description:
      "Currently pursuing my B.E. in Computer Science and Engineering, building technical skills and working toward a meaningful future.",
    tags: ["Engineering", "Innovation", "Future"],
    isCurrent: true,
  },
] as const;

export const socialLinks = {
  github: "https://github.com/Harish2766",
  linkedin: "https://www.linkedin.com/in/harish-g-s-a6755b291/",
  email: "harishgs2766@gmail.com",
  leetcode: "https://leetcode.com/u/harish_2766/",
  hackerrank: "https://www.hackerrank.com/profile/skharish2766",
  whatsapp: "https://web.whatsapp.com/",
} as const;

// ── Stats — Edit these values to match your real numbers ──
export const stats = [
  { label: "Projects", value: "5+", icon: "folder" },
  { label: "Problems Solved", value: "100+", icon: "code" },
  { label: "Technologies", value: "15+", icon: "layers" },
  { label: "Always", value: "Learning", icon: "trending" },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
] as const;
