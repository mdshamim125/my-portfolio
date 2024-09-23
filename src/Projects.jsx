import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  // Define your project data here (replace with actual data)
  const projects = [
    {
      title: "Contest Hub",
      imageUrl:
        "https://contest-hub-c5704.web.app/assets/contest-banner-BWRX07g_.jpg",
      description:
        "Contest Hub is a secure web app for efficient contest management with encrypted authentication. It offers admin, creator, and user dashboards, enabling contest creation, detailed submission viewing, and easy winner declaration. Real-time updates via React Query, secure API calls, responsive design, and Helmet integration ensure a user-friendly experience across all devices.",
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
      // adminCredentials: {
      //   username: "admin@gmail.com",
      //   password: "123qaz!Q",
      // },
    },
    {
      title: "Arts&Crafts",
      imageUrl: "https://i.ibb.co/3vk1hKT/pexels-hamad-bajwa-249513-755858.jpg",
      description:
        "Welcome to Arts&Crafts! Our MongoDB-powered platform features a diverse collection of crafts items with user-friendly registration and category management. Enjoy seamless access on desktops, tablets, and smartphones with a responsive design. Explore detailed categories and showcase your creations effortlessly at Arts&Crafts",
      features: [
        "Comprehensive MongoDB database for craft items.",
        "User-friendly interface for registering, logging in, and managing crafts categories.",
        "Responsive design for seamless access from any device.",
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
        "TRAVELERS is a MongoDB-powered platform for managing diverse blogs and wishlists. It offers seamless registration, a user-friendly interface, and responsive design across devices. Users can create and manage personal blogs, subscribe for updates, and explore travel content effortlessly.",
      features: [
        "Comprehensive MongoDB database for blog management.",
        "User-friendly interface for registering, logging in, and managing personal blog entries.",
        "Responsive design for seamless access from any device.",
        "Subscription for latest updates on travel destinations.",
      ],
      technologies:
        "React, Firebase, React Router, SweetAlert2, MongoDB, Axios, React Data Table Component, React Hot Toast, React Spinners, React Table",
      liveUrl: "https://travel-blog-cf01e.web.app",
      clientGithubUrl:
        "https://github.com/mdshamim125/Travellers-Client?tab=readme-ov-file",
      serverGithubUrl: "https://github.com/mdshamim125/Travellers-Server",
    },
  ];

  return (
    <section className="bg-black py-10" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Projects</h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-[350px] md:h-[500px] md:w-[40%] rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <h4 className="text-xl font-semibold mb-2">
                      Core Features
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <h4 className="text-xl font-semibold mb-2">
                      Technologies Used
                    </h4>
                    <p className="text-gray-700 mb-4">{project.technologies}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Project Links
                    </h4>
                    <ul className="flex space-x-4 mb-4">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.liveUrl}
                          className="text-blue-500 hover:underline"
                        >
                          Live Site
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.clientGithubUrl}
                          className="text-blue-500 hover:underline"
                        >
                          GitHub - Client
                        </a>
                      </li>
                      {project.serverGithubUrl && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.serverGithubUrl}
                            className="text-blue-500 hover:underline"
                          >
                            GitHub - Server
                          </a>
                        </li>
                      )}
                    </ul>
                    {project.adminCredentials && (
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          Admin Credentials
                        </h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Username:</strong>{" "}
                          {project.adminCredentials.username}
                          <br />
                          <strong>Password:</strong>{" "}
                          {project.adminCredentials.password}
                        </p>
                      </div>
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
