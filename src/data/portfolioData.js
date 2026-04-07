// Centralized portfolio content for easy updates without touching UI code.
export const PORTFOLIO_DATA = {
    name: "Kanishk Mittal",
    tagline: "CS undergrad · Full-stack dev · Cybersecurity enthusiast",
    description:
        "Third-year Computer Science student at IIIT Kottayam, specialising in cybersecurity. I build full-stack systems and break things for fun — CTFs, secure APIs, real-time apps.",
    email: "kanishkmittal2005@gmail.com",
    github: "https://github.com/Kanishk-mittal",
    leetcode: "https://leetcode.com/u/Kanishk_mittal2005/",
    linkedin: "https://www.linkedin.com/in/kanishk-mittal-170595229/",
    resume: "https://drive.google.com/file/d/1S-GJ-EnR7Dyy9KtUG4CsHiQps87FCVM2/view?usp=sharing",
    whatsapp: "https://wa.me/917011245992",

    stats: [
        { num: "474+", label: "LeetCode problems solved" },
        { num: "1891", label: "Contest rating · Knight badge · top 5.8%" },
        { num: "389 / 10k+", label: "picoCTF 2025 team rank" },
    ],

    projects: [
        {
            name: "Konnect",
            status: null,
            description:
                "A university chat platform with granular role-based group and club management. End-to-end encrypted using Node-forge and Bcrypt, with recovery keys and a real-time scalable backend.",
            tags: ["React", "Node.js", "TypeScript", "Express", "MongoDB", "Socket.io", "E2EE", "Zod"],
            github: "https://github.com/Kanishk-mittal/Konnect",
        },
        {
            name: "Hand Sign Automation",
            status: null,
            description:
                "Real-time gesture recognition using MediaPipe and XGBoost achieving 90%+ accuracy via wrist-normalised landmarks. Supports unlimited custom signs with a CustomTkinter GUI and minimal CPU training time.",
            tags: ["Python", "XGBoost", "MediaPipe", "OpenCV", "Scikit-Learn", "CustomTkinter"],
            github: "https://github.com/Kanishk-mittal/hand-sign-automation",
        },
        {
            name: "Folder Master",
            status: null,
            description:
                "A CLI tool for declarative JSON-based folder organisation with recursive processing, glob-pattern file-type grouping, conflict resolution, and smart cleanup of empty directories.",
            tags: ["Python", "Automation", "OS Module", "JSON", "CLI"],
            github: "https://github.com/Kanishk-mittal/folder-master",
        },
    ],

    skills: [
        {
            group: "Backend & Databases",
            items: ["Python", "Java", "PHP", "Django", "Flask", "Node.js", "SQL", "MySQL", "MongoDB"],
        },
        {
            group: "Frontend",
            items: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
        },
        {
            group: "Cybersecurity",
            items: ["Burp Suite", "John the Ripper", "OSINT", "CTF", "Cryptographic protocols", "E2EE", "Secure APIs"],
        },
        {
            group: "AI / ML & Tools",
            items: ["Pandas", "ANN", "CNN", "Data preprocessing", "Linux", "Git", "Bash", "Socket.io"],
        },
    ],

    experience: [
        {
            role: "Backend Intern",
            org: "Fiorawall E-commerce Platform",
            location: "Remote",
            period: "2024",
            duration: "1 Month",
            desc: "Developed backend APIs and collaborated on scalable database schema design to optimise e-commerce platform performance.",
        },
        {
            role: "Core Team Member",
            org: "IIIT Kottayam RFID Outpass Portal",
            location: "Kottayam, Kerala",
            period: "Ongoing",
            desc: "Managing an RFID-based student outpass system with 1000+ active users.",
        },
        {
            role: "Sublead, Cyber Security Division",
            org: "BETA LABS · IIIT Kottayam",
            location: "Kottayam",
            period: "2024 – 2025",
            duration: "1 Year",
            desc: "Leading the cyber security wing of BETA LABS. Previously organised the \"Digital Detective\" CTF-styled hunt for 100+ participants as a core team member.",
        },
    ],
};

export const NAV_LINKS = ["about", "projects", "skills", "experience", "contact"];
