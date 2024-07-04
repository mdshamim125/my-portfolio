import "animate.css";

import React from "react";

const Introduction = () => {
  return (
    <div
      id="intro"
      className="hero min-h-screen bg-base-200 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:w-1/2 md:w-2/3 w-full px-4">
          <div className="max-w-md animate__animated animate__fadeInLeft">
            <h1 className="md:text-5xl text-2xl font-bold text-white">
              Hello, I'm Md Shamim
            </h1>
            <h2 className="md:text-2xl text-lg text-white my-4">
              Frontend Web Developer
            </h2>
            <p className="md:text-lg text-white">
              I have expertise in HTML, CSS, JavaScript, <br /> React,
              Express.js, and MongoDB. I <br /> specialize in building
              responsive websites <br /> and aim to become a professional <br />{" "}
              MERN stack web developer.
            </p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1lwechFDuba3ItxDyiDOX_6uem31EXFcP/view"
              className="btn btn-primary  md:mt-4 md:px-6 md:py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/3 w-full mb-0 mt-1 md:mt-0 animate__animated animate__fadeInRight">
          <img
            src="https://i.ibb.co/dbk5Mkc/IMG-4537.jpg"
            alt="Md Shamim"
            className="rounded-lg md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
