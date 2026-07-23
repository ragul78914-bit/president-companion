export interface SkillItem {
  name: string;
  category: 'Tech' | 'Core AI' | 'Leadership';
  icon: string;
}

export interface ComparisonItem {
  insteadOf: string;
  ragulWill: string;
  icon: string;
}

export interface VisionItem {
  id: string;
  title: string;
  category: 'Career & Placements' | 'Innovation & Tech' | 'Academics' | 'Culture & Events';
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
}

export interface AchievementItem {
  year: string;
  title: string;
  role: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CANDIDATE_INFO = {
  name: "Ragul",
  role: "Student President Candidate",
  department: "Artificial Intelligence & Data Science",
  year: "Final Year",
  tagline: "Together, Let's Build a Smarter AI & DS Department.",
  mission: "Equal access to learning, placements, hackathons, and transparent department leadership for every student.",
  heroSubtitle: "Action over promises. Solutions over talk. Growth for everyone.",
  aboutBulletPoints: [
    "⚡ Final Year AI & DS Student & Experienced Full Stack Developer.",
    "💡 Focus on real digital solutions, not empty campaign talk.",
    "🛡️ 100% Financial Transparency for all department funds & events.",
    "🚀 Bringing placements, hackathons, and IVs directly to students."
  ],
  aboutText: [
    "Hello AI & DS Friends!",
    "I'm Ragul, a Final Year AI & DS student and Full Stack Developer.",
    "Leadership isn't about making big speeches—it is about fixing everyday student problems and creating real opportunities.",
    "If elected, I will run our department with complete transparency, teamwork, and tech-driven solutions.",
    "Let's work together to make AI & DS the #1 department in college!"
  ],
  socials: {
    instagram: "https://instagram.com/ragul_aids",
    linkedin: "https://linkedin.com/in/ragul-aids",
    github: "https://github.com/ragul-dev",
    email: "ragul.aids@college.edu",
    whatsapp: "https://wa.me/919876543210"
  }
};

export const SKILLS_LIST: SkillItem[] = [
  { name: "Next.js", category: "Tech", icon: "Globe" },
  { name: "React", category: "Tech", icon: "Code2" },
  { name: "Node.js", category: "Tech", icon: "Server" },
  { name: "Express.js", category: "Tech", icon: "Cpu" },
  { name: "MongoDB", category: "Tech", icon: "Database" },
  { name: "Firebase", category: "Tech", icon: "Flame" },
  { name: "JavaScript", category: "Tech", icon: "FileCode" },
  { name: "TypeScript", category: "Tech", icon: "FileJson" },
  { name: "Tailwind CSS", category: "Tech", icon: "Palette" },
  { name: "Python", category: "Core AI", icon: "Terminal" },
  { name: "AI & ML", category: "Core AI", icon: "Brain" },
  { name: "Full Stack", category: "Tech", icon: "Layers" },
  { name: "Student Leadership", category: "Leadership", icon: "UserCheck" },
  { name: "Problem Solving", category: "Leadership", icon: "Lightbulb" },
  { name: "Team Communication", category: "Leadership", icon: "MessageSquare" }
];

export const COMPARISON_LIST: ComparisonItem[] = [
  {
    insteadOf: "Empty promises...",
    ragulWill: "Real working digital solutions.",
    icon: "Code"
  },
  {
    insteadOf: "Hidden department expenses...",
    ragulWill: "100% Public financial transparency dashboard.",
    icon: "Eye"
  },
  {
    insteadOf: "Waiting for opportunities...",
    ragulWill: "Bringing placements & IVs directly to students.",
    icon: "Rocket"
  },
  {
    insteadOf: "Solo leadership decisions...",
    ragulWill: "Working together with every year student.",
    icon: "Users"
  },
  {
    insteadOf: "Temporary one-day fixes...",
    ragulWill: "Building long-term digital systems for the department.",
    icon: "ShieldCheck"
  }
];

export const VISION_ITEMS: VisionItem[] = [
  { id: "v1", title: "Placement Training", category: "Career & Placements", description: "Weekly aptitude & coding prep sessions for product & AI companies.", iconName: "Briefcase" },
  { id: "v2", title: "Coding Sessions", category: "Innovation & Tech", description: "Peer-led LeetCode DSA & Full Stack coding masterclasses.", iconName: "Code" },
  { id: "v3", title: "Mock Interviews", category: "Career & Placements", description: "1-on-1 tech mock interviews with senior IT mentors.", iconName: "UserCheck" },
  { id: "v4", title: "Aptitude Training", category: "Career & Placements", description: "Gamified weekly aptitude tests with instant answers.", iconName: "Calculator" },
  { id: "v5", title: "Resume Workshops", category: "Career & Placements", description: "ATS-friendly resume reviews and LinkedIn optimizations.", iconName: "FileText" },
  { id: "v6", title: "24-Hr Hackathons", category: "Innovation & Tech", description: "Intra-department AI hackathons with cash prizes & certificates.", iconName: "Trophy" },
  { id: "v7", title: "Coding Leaderboard", category: "Innovation & Tech", description: "Monthly department leaderboards on CodeChef & LeetCode.", iconName: "Award" },
  { id: "v8", title: "Research Guidance", category: "Academics", description: "Paper publication assistance for IEEE & Scopus conferences.", iconName: "BookOpen" },
  { id: "v9", title: "Industry Workshops", category: "Career & Placements", description: "Quarterly workshops by lead AI Engineers & Data Scientists.", iconName: "Building2" },
  { id: "v10", title: "AI & ML Bootcamps", category: "Innovation & Tech", description: "Weekend masterclasses on PyTorch, LLMs & Computer Vision.", iconName: "Cpu" },
  { id: "v11", title: "Open Source Club", category: "Innovation & Tech", description: "Student developers guild to build real GitHub projects.", iconName: "GitBranch" },
  { id: "v12", title: "Project Showcase", category: "Innovation & Tech", description: "Demo days to show final year projects to recruiters.", iconName: "Monitor" },
  { id: "v13", title: "Startup Club", category: "Innovation & Tech", description: "Incubation support & pitch guidance for student founders.", iconName: "Zap" },
  { id: "v14", title: "Maker Lab Access", category: "Innovation & Tech", description: "Hands-on lab access for IoT, Robotics & Generative AI.", iconName: "Sparkles" },
  { id: "v15", title: "Department Portal", category: "Innovation & Tech", description: "Live website for student achievements, notes & circulars.", iconName: "Globe" },
  { id: "v16", title: "Digital Notice Board", category: "Academics", description: "Instant exam & event updates via Web App & Telegram bot.", iconName: "Bell" },
  { id: "v17", title: "Alumni Network", category: "Career & Placements", description: "Direct referral directory connecting with AI & DS alumni.", iconName: "Network" },
  { id: "v18", title: "Internship Desk", category: "Career & Placements", description: "Curated stipend internship leads & cold emailing tips.", iconName: "Compass" },
  { id: "v19", title: "Career Counselling", category: "Career & Placements", description: "Guidance for Higher Studies (GRE/GATE) vs Placements.", iconName: "GraduationCap" },
  { id: "v20", title: "AI & DS Merch", category: "Culture & Events", description: "Official department hoodies, badges, and sports t-shirts.", iconName: "Sparkle" },
  { id: "v21", title: "Tech Symposium", category: "Culture & Events", description: "National level symposium with coding battles & cash prizes.", iconName: "Flag" },
  { id: "v22", title: "Cultural Fests", category: "Culture & Events", description: "Fun celebration nights, talent jams, and music shows.", iconName: "Music" },
  { id: "v23", title: "Talent Showcase", category: "Culture & Events", description: "Monthly platform for photography, music, art & writing.", iconName: "Camera" },
  { id: "v24", title: "Sports League", category: "Culture & Events", description: "Intra-dept cricket, football, chess & esports tournaments.", iconName: "Activity" },
  { id: "v25", title: "Industrial Visits (IV)", category: "Career & Placements", description: "3-day experiential trips to top tech parks & AI labs.", iconName: "Truck" },
  { id: "v26", title: "Skill Up Series", category: "Academics", description: "Git, Linux CLI & Cloud basics for 1st & 2nd year students.", iconName: "Terminal" },
  { id: "v27", title: "Weekly Challenges", category: "Innovation & Tech", description: "Problem of the week with digital badges for top coders.", iconName: "CheckSquare" },
  { id: "v28", title: "Tech Talks", category: "Academics", description: "Webinars summarizing latest AI breakthroughs & trends.", iconName: "Radio" },
  { id: "v29", title: "AI Competitions", category: "Innovation & Tech", description: "Kaggle-style data science challenges with real datasets.", iconName: "Database" },
  { id: "v30", title: "Project Mentorship", category: "Academics", description: "Senior-to-junior pair coding for lab mini projects.", iconName: "HeartHandshake" }
];

export const INITIAL_EXPENSES = [
  {
    title: "Association Annual Budget",
    category: "Association Fund",
    allocatedAmount: 150000,
    spentAmount: 150000,
    description: "Total annual department student fund pool",
    date: "2026-01-05"
  },
  {
    title: "National AI Symposium",
    category: "Symposium",
    allocatedAmount: 45000,
    spentAmount: 38500,
    description: "Stage, trophies, certificates & guest mementos",
    date: "2026-02-14"
  },
  {
    title: "Bangalore Industrial Visit",
    category: "Industrial Visit",
    allocatedAmount: 35000,
    spentAmount: 32000,
    description: "Bus transport & passes for 120 students",
    date: "2026-03-02"
  },
  {
    title: "Generative AI Workshop",
    category: "Workshops",
    allocatedAmount: 20000,
    spentAmount: 16500,
    description: "Speaker honorarium & GPU cloud credits",
    date: "2026-03-20"
  },
  {
    title: "Cultural & Talent Night",
    category: "Cultural",
    allocatedAmount: 25000,
    spentAmount: 21000,
    description: "Stage lighting, audio setup & refreshments",
    date: "2026-04-10"
  },
  {
    title: "Guest Speaker Talks",
    category: "Guest Lecture",
    allocatedAmount: 10000,
    spentAmount: 7500,
    description: "Speaker travel allowance & hall arrangements",
    date: "2026-05-05"
  },
  {
    title: "Farewell & Welcome Functions",
    category: "Department Function",
    allocatedAmount: 15000,
    spentAmount: 12500,
    description: "Gifts, lunch & venue decor",
    date: "2026-06-01"
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Construction Management ERP",
    subtitle: "Real-time Site Operations Portal",
    description: "A full-stack software built to track site workers, attendance, daily expenses, inventory, and generate PDF report logs instantly.",
    tech: ["Next.js", "Express", "MongoDB", "Tailwind"],
    features: [
      "Role-based login for Admin & Site Manager",
      "Live budget & daily expense dashboard",
      "Worker shift & attendance tracker",
      "Instant PDF inspection report generator"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/ragul-dev/construction-management-system",
    liveDemoUrl: "https://construction-erp-demo.vercel.app"
  },
  {
    id: "proj-2",
    title: "Tuition ERP Academy Portal",
    subtitle: "Educational Institution Platform",
    description: "A multi-role academy software empowering teachers, parents, and students with online gradebooks, fee receipts, and test portals.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    features: [
      "Tri-Portal login for Admin, Teacher & Parent",
      "Student attendance & performance analytics",
      "Automated fee receipt generator",
      "Online test portal & rank publisher"
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/ragul-dev/tuition-erp-portal",
    liveDemoUrl: "https://tuition-erp-demo.vercel.app"
  }
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    year: "2025 - Present",
    title: "Final Year AI Student Leader",
    role: "President Candidate",
    description: "Leading student coding drives, hackathons, and acting as bridge between faculty & students.",
    badge: "Leadership"
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    role: "Core Technical Contributor",
    description: "Built 2 production enterprise systems (Construction ERP & Tuition ERP) using Next.js & MongoDB.",
    badge: "Engineering"
  },
  {
    year: "2024",
    title: "Project Mentor",
    role: "Department Coordinator",
    description: "Mentored 15+ junior teams in Web Dev, Machine Learning, and API integrations.",
    badge: "Mentorship"
  },
  {
    year: "2023",
    title: "Smart Campus Hackathon Winner",
    role: "Team Captain",
    description: "Won 1st place for AI-powered automated student attendance software.",
    badge: "Innovation"
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "Why vote for Ragul as Student President?",
    answer: "Ragul is a Final Year AI & DS student and Full Stack Developer who builds real working solutions instead of making empty promises. He guarantees 100% financial transparency, weekly placement drills, and regular hackathons."
  },
  {
    question: "What will Ragul do immediately after winning?",
    answer: "Launch the Department Web Portal, establish weekly Placement & Coding Drills, activate the Anonymous Suggestion Box, and publish live fund spending logs."
  },
  {
    question: "How will department fund transparency work?",
    answer: "Every rupee spent on Symposiums, IVs, Cultural Fests, and Workshops will be logged in the public Transparency Dashboard for all students to see anytime."
  },
  {
    question: "How can students give feedback or report problems?",
    answer: "Use the Anonymous Suggestion Box on this website with zero login required. Entries go straight to Ragul and the core student committee."
  }
];

export const SURVEY_QUESTIONS = [
  { id: "q1", label: "Do you want weekly coding, aptitude & placement training?" },
  { id: "q2", label: "Should our department syllabus be more industry-aligned?" },
  { id: "q3", label: "Do you want more cultural events & talent nights?" },
  { id: "q4", label: "Do you feel students get enough platforms to showcase talent?" },
  { id: "q5", label: "Would you like an anonymous desk to report problems?" },
  { id: "q6", label: "What new initiative would you like Ragul to implement?" },
  { id: "q7", label: "Do you want AI & DS to become the #1 department in college?" },
  { id: "q8", label: "Do you need more Industrial Visits (IV)?" },
  { id: "q9", label: "Should we organize more workshops by IT experts?" },
  { id: "q10", label: "Would you like regular 24-hr hackathons?" },
  { id: "q11", label: "Should students get better 1-on-1 placement guidance?" },
  { id: "q12", label: "Do you want more AI and Machine Learning competitions?" }
];

export const INITIAL_GALLERY = [
  { title: "National AI Symposium", category: "Events", imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", caption: "Keynote presentation & hackathon stage." },
  { title: "Bangalore Industrial Visit", category: "Industrial Visits", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", caption: "AI & DS students visiting tech campus." },
  { title: "Intra-Dept Hackathon", category: "Hackathons", imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", caption: "Non-stop code sprint & prototype building." },
  { title: "Placement Mock Interviews", category: "Placements", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", caption: "Senior mock technical interviews." },
  { title: "PyTorch Workshop", category: "Coding", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80", caption: "Hands-on neural network coding." }
];
