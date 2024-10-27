
const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-gray-900 py-14">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white capitalize">
            Education
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            A snapshot of my academic journey that has shaped my technical
            skills and knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2">
          {/* SSC Card */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-64"
              src="https://i.ibb.co/0j2gvTg/image.png"
              alt="SSC"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                SSC Completion
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Completed Secondary School Certificate (SSC) at Kamarpukur Model
                High School, Haripur, Thakurgaon in 2018.
              </p>
              <p className="mt-4 text-lg font-medium text-blue-600 dark:text-blue-400">
                Year: 2018
              </p>
            </div>
          </div>

          {/* HSC Card */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-64"
              src="https://i.ibb.co/JH2KVMS/image.png"
              alt="HSC"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                HSC Completion
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Completed Higher Secondary Certificate (HSC) at Pirganj
                Government College, Pirganj, Thakurgaon in 2020.
              </p>
              <p className="mt-4 text-lg font-medium text-blue-600 dark:text-blue-400">
                Year: 2020
              </p>
            </div>
          </div>

          {/* BSc in CSE Card */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-64"
              src="https://i.ibb.co/N61H1KJ/image.png"
              alt="BSc in CSE"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                BSc in Computer Science and Engineering
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Currently pursuing BSc in Computer Science and Engineering at
                Begum Rokeya University, Rangpur.
              </p>
              <p className="mt-4 text-lg font-medium text-blue-600 dark:text-blue-400">
                Status: Ongoing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
