
export interface JobCardProps{
    profile:string;
    desc:string;
    exp:number;
    techs:string[];
}

export interface MessagePopupProps{
    status:number;
    onClose: () => void;
    msg:string;
}
export const ALL_SKILLS = [
  "Java",
  "JEE",
  "Spring",
  "Spring Boot",
  "Microservices",
  "Threads",
  "AWS",
  "Azure",
  "DevOps",
  "Cloud",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Ansible",
  "Hadoop",
  "Big Data",
  "Python",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Machine Learning",
  "AI",
  "Statistics",
  "Solidity",
  "Blockchain",
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "TensorFlow",
  "PyTorch",
  "Security",
  "Networking",
  "Linux",
  "Kotlin",
  "Flutter",
  "Dart",
  "Spark",
  "SQL",
  "Figma",
  "UI Design",
  "UX Research",
  "Selenium",
  "Testing",
  "Automation",
  "GraphQL",
  "REST",
  "System Design",
  "C++",
  "C#",
  "Git",
  "CI/CD",
  "Redis",
  "TypeScript (Advanced)",
  "Microfrontend",
  "Encryption"
];