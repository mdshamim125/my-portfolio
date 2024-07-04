import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white">
            My Education
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500"></p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 md:grid-cols-2">
          {/* Card 1: SSC */}
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-[500px]"
              src="https://i.ibb.co/0j2gvTg/image.png"
              alt="SSC"
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                SSC Completion 2018
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Completed SSC from Kamarpukur Model High School, Haripur,
                Thakurgaon in 2018.
              </p>
              <p className="mt-3 text-xl text-blue-500">Year: 2018</p>
            </div>
          </div>

          {/* Card 2: HSC */}
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-[500px]"
              src="https://i.ibb.co/JH2KVMS/image.png"
              alt="HSC"
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                HSC Completion 2020
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Completed HSC from Pirganj Government College, Pirganj,
                Thakurgaon in 2020.
              </p>
              <p className="mt-3 text-xl text-blue-500">Year: 2020</p>
            </div>
          </div>

          {/* Card 3: BSc in CSE */}
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-[500px]"
              src="https://i.ibb.co/N61H1KJ/image.png"
              alt="BSc in CSE"
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                BSc in Computer Science and Engineering
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Currently pursuing BSc in Computer Science and Engineering at
                Begum Rokeya University, Rangpur.
              </p>
              <p className="mt-3 text-xl text-blue-500">Ongoing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
