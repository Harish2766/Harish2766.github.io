// ── Skills / Tech Stack Data ──

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

const assetPath = (path: string) => path;

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Java", icon: assetPath("icons/skills/java.svg") },
      { name: "Python", icon: assetPath("icons/skills/python.svg") },
      { name: "JavaScript", icon: assetPath("icons/skills/javascript.svg") },
      { name: "TypeScript", icon: assetPath("icons/skills/typescript.svg") },
      { name: "C", icon: assetPath("icons/skills/c.svg") },
      { name: "C++", icon: assetPath("icons/skills/cpp.svg") },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", icon: assetPath("icons/skills/react.svg") },
      { name: "HTML", icon: assetPath("icons/skills/html.svg") },
      { name: "Tailwind CSS", icon: assetPath("icons/skills/tailwind.svg") },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Spring Boot", icon: assetPath("icons/skills/springboot.svg") },
      { name: "Node.js", icon: assetPath("icons/skills/nodejs.svg") },
      { name: "Express.js", icon: assetPath("icons/skills/express.svg") },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "Oracle", icon: assetPath("icons/oracle.svg") },
      { name: "MongoDB", icon: assetPath("icons/skills/mongodb.svg") },
    ],
  },
  {
    id: "tools",
    label: "DevOps & Tools",
    skills: [
      { name: "Git", icon: assetPath("icons/skills/git.svg") },
      { name: "GitHub", icon: assetPath("icons/skills/github.svg") },
      { name: "VS Code", icon: assetPath("icons/skills/vscode.svg") },
      { name: "IntelliJ IDEA", icon: assetPath("icons/skills/idea.svg") },
      { name: "Postman", icon: assetPath("icons/skills/postman.svg") },
      { name: "Bruno", icon: assetPath("icons/skills/bruno.svg") },
    ],
  },
];
