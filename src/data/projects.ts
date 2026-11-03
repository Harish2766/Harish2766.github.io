// ── Projects Data ──
// Harish G S — Featured Projects

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Cryptography using Quantum communication Channel - PQC-QKD",
    description:
      "Research and implementation of Post-Quantum Cryptography (PQC) integrated with Quantum Key Distribution (QKD) protocols to establish quantum-resistant secure communication channels against eavesdropping and quantum computation threats.",
    image: "/projects/cryptography-qkd.jpg",
    technologies: ["Python", "Qiskit", "Quantum Cryptography", "PQC", "Network Security"],
    github: "https://github.com/Harish2766/CIP",
  },
  {
    id: "project-2",
    title: "College Event Management System",
    description:
      "A full-stack web application designed to streamline college event planning, attendee registrations, notifications, and administrative approvals with role-based access control and responsive dashboards.",
    image: "/projects/college-event-management.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Harish2766/College-Event-Managment-",
  },
  {
    id: "project-3",
    title: "Customer-Churn-Prediction-Model",
    description:
      "An end-to-end machine learning solution that analyzes customer historical behavior and retention metrics to forecast churn risks, featuring comprehensive data preprocessing, feature engineering, and model evaluation.",
    image: "/projects/customer-churn-prediction.png",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/Harish2766/Customer-Churn-Prediction-Model",
  },
  {
    id: "project-4",
    title: "Hand Gesture Game Controller",
    description:
      "Real-time computer vision interface translating hand gestures and palm landmarks into responsive in-game control inputs using MediaPipe and OpenCV for touchless interactive gameplay.",
    image: "/projects/hand-gesture-controller.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "PyAutoGUI"],
    github: "https://github.com/Harish2766/Hand-Gesture-Game-Controller",
  },
];
