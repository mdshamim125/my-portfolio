export const projectsData = [
  {
    id: 2,
    title: "JobSphere  ( Team Project )",
    shortDesc: "Job portal for seekers & recruiters with advanced features",
    imageUrl: "https://i.ibb.co/DfTWNzZd/job-portal.png",
    description:
      "JobSphere is a collaborative hiring platform connecting job seekers and recruiters with advanced job search, application tracking, and communication features. It streamlines the hiring process with support systems, secure authentication, and powerful dashboards.",
    details: {
      overview: `JobSphere (Team Project) is a hiring platform that bridges the gap between job seekers and recruiters. It offers advanced job management features, integrated communication tools, and a streamlined admin experience. My key contributions include building the support system, Nodemailer-based communication, and job/user management modules.`,
      credentials: {
        recruiter: { email: "hjbrl@gmail.com", password: "123qaz!Q" },
        user: { email: "mdsr9510@gmail.com", password: "123qaz!Q" },
      },
      features: [
        {
          title: "Jobs Search & Filter",
          points: [
            "Users can search jobs by title, skill, city, and experience range.",
            "Filters available on Jobs Page and across relevant sections.",
          ],
        },
        {
          title: "Save Jobs",
          points: [
            "Job seekers can save jobs from the Job Details page.",
            "Saved jobs are accessible from their personal dashboard.",
          ],
        },
        {
          title: "Job-status Tracking",
          points: [
            "Applied or saved jobs display their current status.",
            "Job seekers can track job progress from the Applied Jobs page.",
          ],
        },
        {
          title: "Post a Job",
          points: [
            "Recruiters can post jobs by submitting essential details.",
            "Recruiters must update their profiles with minimum required info.",
          ],
        },
        {
          title: "Posted Jobs",
          points: [
            "Recruiters can view and manage all jobs they’ve posted.",
            "Options for updating or deleting posted jobs.",
          ],
        },
        {
          title: "Job Seekers Page",
          points: [
            "Recruiters can browse a list of job seekers with completed profiles.",
            "Only job seekers with at least 80% profile completion are shown.",
          ],
        },
        {
          title: "Blogs Page",
          points: [
            "Informational and learning blogs for job seekers.",
            "Content includes career tips, resume guidance, and industry insights.",
          ],
        },
        {
          title: "Resume PDF Downloader",
          points: [
            "Job seekers with at least 80% profile completion can download a resume.",
            "Resumes are generated in a professional PDF design.",
          ],
        },
        {
          title: "Job Alert & Notification",
          points: [
            "Real-time notifications for job status changes.",
            "Job seekers and recruiters receive alerts for updates and actions.",
          ],
        },
        {
          title: "Support & Communication",
          points: [
            "Integrated support system for user inquiries and assistance.",
            "Nodemailer integration for sending interview invitations and messages.",
          ],
        },
        {
          title: "Admin Dashboard",
          points: [
            "Admin can manage users, jobs, and recruiters.",
            "Statistics and analytics displayed with Recharts.",
          ],
        },
      ],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "NextAuth",
        "Firebase",
        "Nodemailer",
        "Axios",
        "Recharts",
        "Chart.js",
        "Headless UI",
        "MUI",
        "Heroicons",
        "bcrypt",
        "React Hook Form",
        "SweetAlert2",
        "Swiper",
        "React Share",
      ],
    },
    liveUrl: "https://job-sphere-rouge.vercel.app",
    githubUrl: "https://github.com/HunterMahmud/JobSphere",
    serverGithubUrl: "https://github.com/HunterMahmud/JobSphere/tree/main",
  },
  {
    id: 1,
    title: "Contest Hub",
    shortDesc: "Contest platform with multi-user dashboards",
    imageUrl: "https://i.ibb.co/nZkm1Cb/Annotation-2025-05-28-181158.png",
    description:
      "Contest Hub is a comprehensive web application designed for administrators, creators, and users to efficiently manage contests, submissions, and winners with secure authentication and real-time updates.",
    details: {
      overview: `Welcome to the Contest Hub! This platform allows administrators to create and manage contests, as well as view and judge submissions from participants. Contest Hub provides secure user authentication, multiple dashboards for different roles, and seamless contest management with real-time updates.`,
      adminCredentials: {
        email: "admin@gmail.com",
        password: "123qaz!Q",
      },
      features: [
        {
          title: "User Authentication",
          points: [
            "Secure login and registration for administrators, creators, and users.",
            "Password encryption for enhanced data safety.",
          ],
        },
        {
          title: "Dashboard",
          points: [
            "Admin dashboard: Manage contests, users, and declare winners.",
            "Creator dashboard: Manage contests before admin approval.",
            "User dashboard: Manage participation, wins, profiles, and statistics.",
            "Easy navigation with user-friendly UI.",
          ],
        },
        {
          title: "Contest Management",
          points: [
            "Create contests with details like contest name, prize money, and deadlines.",
            "View a list of all contests created by creators.",
          ],
        },
        {
          title: "Submissions",
          points: [
            "View all submissions for a contest.",
            "Detailed view of participant name, email, and submission data.",
          ],
        },
        {
          title: "Winner Declaration",
          points: [
            "Admins can declare a winner for each contest.",
            "Winner status is displayed prominently once declared.",
          ],
        },
        {
          title: "Real-Time Updates",
          points: [
            "Submissions and contests update automatically using React Query.",
            "No need for manual page refresh when updating data.",
          ],
        },
        {
          title: "Security",
          points: [
            "Secure API calls with token authentication (Axios + JWT).",
            "Restricted access based on user roles.",
          ],
        },
        {
          title: "Responsive Design",
          points: [
            "Mobile-friendly design for all devices.",
            "Seamless experience on desktop, tablet, and mobile.",
          ],
        },
        {
          title: "SEO & Helmet Integration",
          points: ["Unique SEO-friendly titles for each page."],
        },
      ],
      technologies: [
        "React",
        "Firebase",
        "MongoDB",
        "Express.js",
        "JWT",
        "Axios",
        "React Router DOM",
        "React Query",
        "Chart.js",
        "Headless UI",
        "Stripe",
      ],
    },
    liveUrl: "https://contest-hub-c5704.web.app",
    githubUrl: "https://github.com/mdshamim125/Contest-Hub-Client",
    serverGithubUrl: "https://github.com/mdshamim125/Contest-Hub-Server",
  },

  {
    id: 4,
    title: "Digital Wallet Management",
    shortDesc: "Secure & scalable digital financial transactions platform",
    imageUrl: "https://i.ibb.co.com/cKwVmB9M/Screenshot-1006.png",
    description:
      "A secure and scalable digital wallet service enabling users to manage balances, perform financial transactions, and access real-time analytics. It supports role-based dashboards for users, agents, and admins with advanced monitoring and management tools.",
    details: {
      overview: `Digital Wallet API Management provides an end-to-end financial solution with features like deposits, withdrawals, transfers, transaction history, and real-time analytics. Built with role-based authentication and secure APIs, it ensures both usability and scalability for users, agents, and administrators.`,
      backendOverview: `This backend system (inspired by Bkash/Nagad) enables secure financial transactions, wallet management, and user operations. It is built with Node.js, Express.js, and MongoDB, featuring JWT-based authentication, role-based authorization, and full transaction history tracking.`,
      credentials: {
        user: { email: "mdsr9510@gmail.com", password: "12345678" },
        agent: { email: "cse12005038brur@gmail.com", password: "12345678" },
        admin: { email: "admin@gmail.com", password: "12345678" },
      },
      features: [
        {
          title: "Authentication & Authorization",
          points: [
            "JWT-based login & registration system with refresh tokens.",
            "Role-based access control for User, Agent, and Admin.",
            "Password hashing with Bcrypt and secure logout.",
          ],
        },
        {
          title: "Wallet Management",
          points: [
            "Check wallet balance in real time.",
            "Deposit & withdraw money securely.",
            "Transfer funds to other users by phone/email.",
            "Wallets auto-created at registration (initial balance: ৳50).",
          ],
        },
        {
          title: "Transaction History",
          points: [
            "Paginated and searchable transaction list.",
            "Advanced filtering by type, date, or amount.",
            "All transactions are stored and trackable.",
          ],
        },
        {
          title: "Dashboards & Role Features",
          points: [
            "User dashboard: manage balance, view personal transactions.",
            "Agent dashboard: cash-in/cash-out operations for users.",
            "Admin dashboard: manage users, approve/suspend agents, view all wallets and transactions.",
          ],
        },
        {
          title: "General Features",
          points: [
            "Role-based navigation menus.",
            "Responsive mobile-first UI with Tailwind CSS.",
            "Form validation & error handling.",
            "Toast notifications for quick feedback.",
            "Interactive onboarding with guided tours.",
            "Dark/Light theme toggle.",
          ],
        },
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux Toolkit",
        "RTK Query",
        "Tailwind CSS",
        "Axios",
        "React Query",
        "React Joyride",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt.js",
        "Zod (validation)",
      ],
    },
    liveUrl: "https://digital-wallet-frontend-amber.vercel.app",
    githubUrl: "https://github.com/mdshamim125/digital-wallet-frontend",
    serverGithubUrl:
      "https://github.com/mdshamim125/digital-wallet-management-api",
  },
  {
    id: 3,
    title: "TRAVELERS",
    shortDesc: "Travel blog with personalized content & subscriptions",
    imageUrl: "https://i.ibb.co/bR2hhtPM/traveller.png",
    description:
      "TRAVELERS is a user-centric travel blogging platform built with MongoDB, React, and Firebase. It offers a wide range of travel blogs across multiple categories, with features like wishlists, personal blog management, and subscriptions for updates on new destinations. With a responsive and user-friendly interface, TRAVELERS ensures seamless access across devices.",
    details: {
      overview: `TRAVELERS is designed for travel enthusiasts to explore blogs, share personal travel stories, and curate personalized content. Users can register, log in, create blogs, manage their wishlist, and subscribe to receive updates on new travel experiences. Built with scalability and performance in mind, TRAVELERS ensures a smooth and engaging browsing experience on desktop, tablet, and mobile.`,
      features: [
        {
          title: "Comprehensive MongoDB Database",
          points: [
            "Robust MongoDB backend to store and manage all blog entries.",
            "Ensures data integrity and fast retrieval for large collections.",
          ],
        },
        {
          title: "Diverse Blog Collection",
          points: [
            "Blogs organized into multiple categories for easy discovery.",
            "Users can browse content ranging from destinations to travel tips.",
          ],
        },
        {
          title: "User Wishlist",
          points: [
            "Users can add blogs to a personal wishlist.",
            "Wishlist accessible from the user dashboard for quick access.",
          ],
        },
        {
          title: "User-Friendly Interface",
          points: [
            "Simple registration and login with Firebase authentication.",
            "Logged-in users can create and manage their own blogs.",
          ],
        },
        {
          title: "Responsive Design",
          points: [
            "Optimized for desktop, tablet, and smartphone use.",
            "Provides a visually appealing and smooth experience on all devices.",
          ],
        },
        {
          title: "Subscription System",
          points: [
            "Users can subscribe for notifications on new travel blogs.",
            "Keeps subscribers updated with the latest travel destinations.",
          ],
        },
      ],
      technologies: [
        "React",
        "Firebase",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Axios",
        "React Router",
        "React Hot Toast",
        "React Data Table Component",
        "React Spinners",
        "React Table",
      ],
    },
    liveUrl: "https://travel-blog-cf01e.web.app",
    githubUrl: "https://github.com/mdshamim125/Travellers-Client",
    serverGithubUrl: "https://github.com/mdshamim125/Travellers-Server",
  },
  {
    id: 5,
    title: "Arts&Crafts",
    shortDesc: "Platform to explore and manage craft items with user accounts",
    imageUrl: "https://i.ibb.co.com/hxPRsZkR/Screenshot-1007.png", // replace with actual screenshot if available
    description:
      "A MongoDB-powered platform offering a diverse collection of crafts items categorized for easy exploration. Users can register, log in, and manage their craft categories conveniently with a responsive design for all devices.",
    details: {
      overview: `Arts&Crafts is a user-centric platform designed for craft enthusiasts. It allows users to explore detailed categories, add and manage their crafts, and enjoy a fully responsive interface on desktop, tablet, and mobile devices.`,
      features: [
        {
          title: "Database & Collections",
          points: [
            "Comprehensive MongoDB database powering all features.",
            "Collection of craft items organized by categories.",
            "Detailed view of each craft category with all features and facilities.",
          ],
        },
        {
          title: "User-Friendly Interface",
          points: [
            "Register and log in to manage your own crafts.",
            "Add and update craft categories when logged in.",
            "Smooth navigation and attractive UI.",
          ],
        },
        {
          title: "Responsive Design",
          points: [
            "Works seamlessly on desktops, tablets, and smartphones.",
            "Optimized layout adjusts automatically for all devices.",
          ],
        },
      ],
      technologies: [
        "React",
        "Firebase",
        "MongoDB",
        "React Hook Form",
        "Tailwind CSS",
        "React Router DOM",
        "React Icons",
        "React Spinners",
        "React Tooltip",
        "SweetAlert2",
      ],
    },
    liveUrl: "https://add-and-craft.web.app",
    githubUrl: "https://github.com/mdshamim125/Arts-Crafts-Client",
    serverGithubUrl: "https://github.com/mdshamim125/Arts-Crafts-Server",
  },
];
