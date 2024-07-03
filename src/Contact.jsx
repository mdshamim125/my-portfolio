import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              Let’s talk
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Ask us everything and we would love to hear from you
            </p>

            <form className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  (257) 563-7401
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  acb@example.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

              <div className="flex mt-4 -mx-1.5 ">
                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.69668 18.6668 6.67334Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.478 2 2 6.478 2 12C2 17.522 6.478 22 12 22C17.522 22 22 17.522 22 12C22 6.478 17.522 2 12 2ZM8.707 16.293C8.1 15.686 7.658 14.884 7.439 14.008C7.385 13.8 7.37 13.585 7.37 13.37C7.37 12.598 7.45 11.855 7.721 11.183C7.885 10.802 8.184 10.5 8.564 10.306C8.945 10.112 9.393 10.017 9.877 10.017C10.426 10.017 10.879 10.128 11.232 10.347C11.585 10.566 11.831 10.859 11.969 11.226C12.192 11.826 12.164 12.73 12.164 12.73C12.164 12.73 12.887 12.503 13.305 12.295C13.722 12.086 14.04 11.685 14.261 11.175C14.708 10.117 14.582 8.98 13.945 8.152C13.308 7.324 12.268 6.893 11.202 7.046C10.135 7.199 9.295 7.896 8.975 8.835C8.655 9.774 8.92 10.87 9.684 11.532C9.886 11.772 9.94 12.107 9.941 12.456C9.942 12.805 9.89 13.14 9.685 13.382C9.48 13.624 9.143 13.741 8.799 13.692C8.799 13.692 8.804 14.696 8.799 15.002C8.794 15.308 8.707 16.293 8.707 16.293Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 2C3 0.895431 3.89543 0 5 0H19C20.1046 0 21 0.89543 21 2V22C21 23.1046 20.1046 24 19 24H5C3.89543 24 3 23.1046 3 22V2ZM5 2V22H19V2H5ZM12 3.5C12.8284 3.5 13.5 4.17157 13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5ZM7.50098 19C7.50098 18.1716 8.17255 17.5 9.00098 17.5H15.0005C15.8289 17.5 16.5005 18.1716 16.5005 19V20.5H7.50098V19ZM18.2849 15C18.0576 15 17.8277 15.0925 17.6537 15.2566C17.4797 15.4206 17.3807 15.6343 17.3807 15.8576C17.3807 16.081 17.4797 16.2947 17.6537 16.4587C17.8277 16.6228 18.0576 16.7153 18.2849 16.7153C18.5122 16.7153 18.7422 16.6228 18.9162 16.4587C19.0902 16.2947 19.1892 16.081 19.1892 15.8576C19.1892 15.6343 19.0902 15.4206 18.9162 15.2566C18.7422 15.0925 18.5122 15 18.2849 15Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-10 h-10 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5ZM4 5V19H20V5H4ZM12 9.5C12.8284 9.5 13.5 10.1716 13.5 11C13.5 11.8284 12.8284 12.5 12 12.5C11.1716 12.5 10.5 11.8284 10.5 11C10.5 10.1716 11.1716 9.5 12 9.5ZM7.5 17.5C7.5 16.3954 8.39543 15.5 9.5 15.5H14.5C15.6046 15.5 16.5 16.3954 16.5 17.5V18.5H7.5V17.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
