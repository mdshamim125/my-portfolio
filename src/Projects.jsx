import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Contest Hub",
      imageUrl:
        "https://contest-hub-c5704.web.app/assets/contest-banner-BWRX07g_.jpg",
      description:
        "Contest Hub is a secure web app for efficient contest management with encrypted authentication. It offers admin, creator, and user dashboards, enabling contest creation, detailed submission viewing, and easy winner declaration.",
      features: [
        "Secure login and registration with password encryption.",
        "Admin, creator, and user dashboards for comprehensive management.",
        "Real-time updates using React Query.",
      ],
      technologies: "React, Express.js, MongoDB, Firebase, JWT, Axios",
      liveUrl: "https://contest-hub-c5704.web.app",
      clientGithubUrl:
        "https://github.com/mdshamim125/Contest-Hub-Client?tab=readme-ov-file",
      serverGithubUrl: "https://github.com/mdshamim125/Contest-Hub-Server",
    },
    {
      title: "Arts&Crafts",
      imageUrl: "https://i.ibb.co/3vk1hKT/pexels-hamad-bajwa-249513-755858.jpg",
      description:
        "Arts&Crafts is a MongoDB-powered platform featuring a diverse collection of craft items, with user-friendly registration and category management. It ensures a responsive design for seamless access across devices.",
      features: [
        "Comprehensive MongoDB database for craft items.",
        "User-friendly interface for managing crafts categories.",
        "Responsive design for all devices.",
      ],
      technologies: "React, Firebase, React Router, SweetAlert2, MongoDB",
      liveUrl: "https://add-and-craft.web.app",
      clientGithubUrl:
        "https://github.com/mdshamim125/Arts-Crafts-Client?tab=readme-ov-file",
      serverGithubUrl: "https://github.com/mdshamim125/Arts-Crafts-Server",
    },
    {
      title: "TRAVELERS",
      imageUrl:
        "https://i.ibb.co/jbzSfwD/mike-swigunski-Fz0-XVa-r-LQI-unsplash.jpg",
      description:
        "TRAVELERS is a MongoDB-powered platform for managing diverse blogs and wishlists, offering seamless registration, a responsive design, and subscription options for travel updates.",
      features: [
        "Comprehensive MongoDB database for blog management.",
        "User-friendly interface for managing personal blog entries.",
        "Subscription for latest travel destination updates.",
      ],
      technologies:
        "React, Firebase, React Router, SweetAlert2, MongoDB, Axios, React Data Table Component, React Hot Toast, React Table",
      liveUrl: "https://travel-blog-cf01e.web.app",
      clientGithubUrl:
        "https://github.com/mdshamim125/Travellers-Client?tab=readme-ov-file",
      serverGithubUrl: "https://github.com/mdshamim125/Travellers-Server",
    },
  ];

  return (
    <section className="bg-gray-900 py-16" id="projects">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
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
                className="relative bg-cover bg-center p-8 rounded-lg shadow-lg text-white"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  minHeight: "400px",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <h4 className="text-lg font-semibold mb-2">Core Features:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold mb-2">
                    Technologies Used:
                  </h4>
                  <p className="mb-6">{project.technologies}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-500 transition-all"
                    >
                      <FaExternalLinkAlt />
                      Live Site
                    </a>
                    <a
                      href={project.clientGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 text-white flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-600 transition-all"
                    >
                      <FaGithub />
                      Client Repo
                    </a>
                    {project.serverGithubUrl && (
                      <a
                        href={project.serverGithubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-600 transition-all"
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
//         <h2 className="text-4xl font-bold text-center text-white mb-12">
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
//                       className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-all"
//                     >
//                       Live Site
//                     </a>
//                     <a
//                       href={project.clientGithubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all"
//                     >
//                       GitHub (Client)
//                     </a>
//                     {project.serverGithubUrl && (
//                       <a
//                         href={project.serverGithubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all"
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
