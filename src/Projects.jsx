import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaCheckCircle, FaExternalLinkAlt, FaGithub, FaListAlt, FaTools } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  // const projects = [
  //   {
  //     title: "JobSphere (Team-Project)",
  //     imageUrl: "https://i.ibb.co.com/qDNThr3/pexels-fauxels-3184613.jpg", // Replace with your JobSphere image URL
  //     description:
  //       "JobSphere is a platform that connects job seekers with recruiters. It allows users to apply for jobs, manage their resumes, and receive notifications for new opportunities. Recruiters can post jobs, view applications, and communicate with candidates.",
  //     features: [
  //       "Support System: Integrated support system for user inquiries and assistance.",
  //       "Communication: Nodemailer integration for interview invitations and communication.",
  //       "Job & User Management: Job searching, filtering, status tracking, NextAuth and private routing.",
  //       "Admin Dashboard: Admin dashboard for statistics, user management and job management.",
  //     ],
  //     technologies:
  //       "Next.js, Tailwind CSS,, Recharts, Express.js, MongoDB, bcrypt, Nodemailer, react-share",
  //     liveUrl: "https://job-sphere-rouge.vercel.app", // Replace with your live JobSphere URL
  //     clientGithubUrl: "https://github.com/HunterMahmud/JobSphere/tree/main", // Replace with the actual client repo URL
  //     serverGithubUrl: "https://github.com/HunterMahmud/JobSphere/tree/main", // Replace with the actual server repo URL
  //   },
  //   {
  //     title: "Contest Hub",
  //     imageUrl:
  //       "https://contest-hub-c5704.web.app/assets/contest-banner-BWRX07g_.jpg",
  //     description:
  //       "Contest Hub is a secure web app for efficient contest management with encrypted authentication. It offers admin, creator, and user dashboards, enabling contest creation, detailed submission viewing, and easy winner declaration.",
  //     features: [
  //       "Secure login and registration with password encryption.",
  //       "Admin, creator, and user dashboards for comprehensive management.",
  //       "Real-time updates using React Query.",
  //     ],
  //     technologies: "React, Express.js, MongoDB, Firebase, JWT, Axios",
  //     liveUrl: "https://contest-hub-c5704.web.app",
  //     clientGithubUrl:
  //       "https://github.com/mdshamim125/Contest-Hub-Client?tab=readme-ov-file",
  //     serverGithubUrl: "https://github.com/mdshamim125/Contest-Hub-Server",
  //   },
  //   // {
  //   //   title: "Arts&Crafts",
  //   //   imageUrl: "https://i.ibb.co/3vk1hKT/pexels-hamad-bajwa-249513-755858.jpg",
  //   //   description:
  //   //     "Arts&Crafts is a MongoDB-powered platform featuring a diverse collection of craft items, with user-friendly registration and category management. It ensures a responsive design for seamless access across devices.",
  //   //   features: [
  //   //     "Comprehensive MongoDB database for craft items.",
  //   //     "User-friendly interface for managing crafts categories.",
  //   //     "Responsive design for all devices.",
  //   //   ],
  //   //   technologies: "React, Firebase, React Router, SweetAlert2, MongoDB",
  //   //   liveUrl: "https://add-and-craft.web.app",
  //   //   clientGithubUrl:
  //   //     "https://github.com/mdshamim125/Arts-Crafts-Client?tab=readme-ov-file",
  //   //   serverGithubUrl: "https://github.com/mdshamim125/Arts-Crafts-Server",
  //   // },
  //   {
  //     title: "TRAVELERS",
  //     imageUrl:
  //       "https://i.ibb.co/jbzSfwD/mike-swigunski-Fz0-XVa-r-LQI-unsplash.jpg",
  //     description:
  //       "TRAVELERS is a MongoDB-powered platform for managing diverse blogs and wishlists, offering seamless registration, a responsive design, and subscription options for travel updates.",
  //     features: [
  //       "Comprehensive MongoDB database for blog management.",
  //       "User-friendly interface for managing personal blog entries.",
  //       "Subscription for latest travel destination updates.",
  //     ],
  //     technologies:
  //       "React, Firebase, React Router, SweetAlert2, MongoDB, Axios, React Data Table Component, React Hot Toast, React Table",
  //     liveUrl: "https://travel-blog-cf01e.web.app",
  //     clientGithubUrl:
  //       "https://github.com/mdshamim125/Travellers-Client?tab=readme-ov-file",
  //     serverGithubUrl: "https://github.com/mdshamim125/Travellers-Server",
  //   },
  // ];

  const projects = [
    {
      title: "JobSphere (Team-Project)",
      imageUrl: "https://i.ibb.co.com/qDNThr3/pexels-fauxels-3184613.jpg",
      description:
        "A platform connecting job seekers and recruiters with job applications, resume management, and communication tools.",
      features: [
        "Integrated support system for user inquiries.",
        "Nodemailer for interview invitations.",
        "Job filtering, tracking, and private routing.",
        "Admin dashboard for statistics and user management.",
      ],
      technologies:
        "Next.js, Tailwind CSS, Recharts, Express.js, MongoDB, Nodemailer, bcrypt",
      liveUrl: "https://job-sphere-rouge.vercel.app",
      clientGithubUrl: "https://github.com/HunterMahmud/JobSphere/tree/main",
      serverGithubUrl: "https://github.com/HunterMahmud/JobSphere/tree/main",
    },
    {
      title: "Contest Hub",
      imageUrl:
        "https://contest-hub-c5704.web.app/assets/contest-banner-BWRX07g_.jpg",
      description:
        "A secure platform for contest management with dashboards for admins, creators, and users.",
      features: [
        "Encrypted authentication with secure login.",
        "Dedicated dashboards for detailed management.",
        "Real-time updates using React Query.",
      ],
      technologies: "React, Express.js, MongoDB, Firebase, JWT, Axios",
      liveUrl: "https://contest-hub-c5704.web.app",
      clientGithubUrl:
        "https://github.com/mdshamim125/Contest-Hub-Client?tab=readme-ov-file",
      serverGithubUrl: "https://github.com/mdshamim125/Contest-Hub-Server",
    },
    {
      title: "TRAVELERS",
      imageUrl:
        "https://i.ibb.co/jbzSfwD/mike-swigunski-Fz0-XVa-r-LQI-unsplash.jpg",
      description:
        "A travel blogging platform featuring blog and wishlist management with subscription options.",
      features: [
        "MongoDB-powered blog management.",
        "Personalized blog entries for users.",
        "Subscription for travel updates.",
      ],
      technologies:
        "React, Firebase, MongoDB, Axios, React Table, React Data Table Component",
      liveUrl: "https://travel-blog-cf01e.web.app",
      clientGithubUrl:
        "https://github.com/mdshamim125/Travellers-Client?tab=readme-ov-file",
      serverGithubUrl: "https://github.com/mdshamim125/Travellers-Server",
    },
  ];

  
  return (
    <section className="bg-gray-900 py-16" id="projects" data-aos="zoom-in-up">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-gray-400 mb-12">
          My Projects
        </h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
  <SwiperSlide key={index}>
    <div
      className="relative bg-cover bg-center p-8 rounded-lg shadow-lg text-gray-200"
      style={{
        backgroundImage: `url(${project.imageUrl})`,
        minHeight: "450px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      <div className="relative z-10 flex flex-col justify-center h-full">
        <h3 className="text-2xl text-gray-300 font-bold mb-4">{project.title}</h3>
        <p className="mb-4 text-gray-300">{project.description}</p>

        <h4 className="text-lg text-gray-300 font-semibold mb-2 flex items-center gap-2">
          <FaListAlt /> Core Features:
        </h4>
        <div className="mb-4 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex text-gray-300 items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <h4 className="text-lg text-gray-300 font-semibold mb-2 flex items-center gap-2">
          <FaTools /> Technologies Used:
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.split(", ").map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="md:flex gap-4 space-y-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-gray-300 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-500 transition-all"
          >
            <FaExternalLinkAlt />
            Live Site
          </a>
          <a
            href={project.clientGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-gray-300 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-600 transition-all"
          >
            <FaGithub />
            Client Repo
          </a>
          {project.serverGithubUrl && (
            <a
              href={project.serverGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-gray-300 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-600 transition-all"
            >
              <FaGithub />
              Server Repo
            </a>
          )}
        </div>
      </div>
    </div>
  </SwiperSlide>
))}

        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Contest Hub",
//       imageUrl:
//         "https://contest-hub-c5704.web.app/assets/contest-banner-BWRX07g_.jpg",
//       description:
//         "Contest Hub is a secure web app for efficient contest management with encrypted authentication. It offers admin, creator, and user dashboards, enabling contest creation, detailed submission viewing, and easy winner declaration.",
//       features: [
//         "Secure login and registration with password encryption.",
//         "Admin, creator, and user dashboards for comprehensive management.",
//         "Real-time updates using React Query.",
//       ],
//       technologies: "React, Express.js, MongoDB, Firebase, JWT, Axios",
//       liveUrl: "https://contest-hub-c5704.web.app",
//       clientGithubUrl:
//         "https://github.com/mdshamim125/Contest-Hub-Client?tab=readme-ov-file",
//       serverGithubUrl: "https://github.com/mdshamim125/Contest-Hub-Server",
//     },
//     {
//       title: "Arts&Crafts",
//       imageUrl: "https://i.ibb.co/3vk1hKT/pexels-hamad-bajwa-249513-755858.jpg",
//       description:
//         "Arts&Crafts is a MongoDB-powered platform featuring a diverse collection of craft items, with user-friendly registration and category management. It ensures a responsive design for seamless access across devices.",
//       features: [
//         "Comprehensive MongoDB database for craft items.",
//         "User-friendly interface for managing crafts categories.",
//         "Responsive design for all devices.",
//       ],
//       technologies: "React, Firebase, React Router, SweetAlert2, MongoDB",
//       liveUrl: "https://add-and-craft.web.app",
//       clientGithubUrl:
//         "https://github.com/mdshamim125/Arts-Crafts-Client?tab=readme-ov-file",
//       serverGithubUrl: "https://github.com/mdshamim125/Arts-Crafts-Server",
//     },
//     {
//       title: "TRAVELERS",
//       imageUrl:
//         "https://i.ibb.co/jbzSfwD/mike-swigunski-Fz0-XVa-r-LQI-unsplash.jpg",
//       description:
//         "TRAVELERS is a MongoDB-powered platform for managing diverse blogs and wishlists, offering seamless registration, a responsive design, and subscription options for travel updates.",
//       features: [
//         "Comprehensive MongoDB database for blog management.",
//         "User-friendly interface for managing personal blog entries.",
//         "Subscription for latest travel destination updates.",
//       ],
//       technologies:
//         "React, Firebase, React Router, SweetAlert2, MongoDB, Axios, React Data Table Component, React Hot Toast, React Table",
//       liveUrl: "https://travel-blog-cf01e.web.app",
//       clientGithubUrl:
//         "https://github.com/mdshamim125/Travellers-Client?tab=readme-ov-file",
//       serverGithubUrl: "https://github.com/mdshamim125/Travellers-Server",
//     },
//   ];

//   return (
//     <section className="bg-gray-900 py-16" id="projects">
//       <div className="container mx-auto px-6 md:px-10">
//         <h2 className="text-4xl font-bold text-center text-gray-200 mb-12">
//           My Projects
//         </h2>

//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
//                 <img
//                   src={project.imageUrl}
//                   alt={project.title}
//                   className="w-full md:w-[40%] h-[250px] md:h-auto object-cover rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
//                 />
//                 <div className="flex flex-col justify-between w-full md:w-[60%]">
//                   <div>
//                     <h3 className="text-2xl font-bold mb-4 text-gray-800">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-600 mb-6">{project.description}</p>
//                     <h4 className="text-lg font-semibold mb-3">Core Features:</h4>
//                     <ul className="list-disc list-inside text-gray-600 mb-6">
//                       {project.features.map((feature, idx) => (
//                         <li key={idx}>{feature}</li>
//                       ))}
//                     </ul>
//                     <h4 className="text-lg font-semibold mb-2">
//                       Technologies Used:
//                     </h4>
//                     <p className="text-gray-600 mb-6">{project.technologies}</p>
//                   </div>
//                   <div className="flex space-x-6 mt-6">
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-blue-600 text-gray-200 px-4 py-2 rounded-full hover:bg-blue-500 transition-all"
//                     >
//                       Live Site
//                     </a>
//                     <a
//                       href={project.clientGithubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-700 transition-all"
//                     >
//                       GitHub (Client)
//                     </a>
//                     {project.serverGithubUrl && (
//                       <a
//                         href={project.serverGithubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-700 transition-all"
//                       >
//                         GitHub (Server)
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Projects;
