"use client";
import { useEffect, useState } from "react";

const Headder = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 45); // 45px is the height of the top div
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`mx-auto transition duratioon-500 max-sm:bg-[#424b40] max-sm:h-44  px-0 fixed top-0 right-0 left-0 z-[1030] ${isScrolled ? "sm:transform sm:-translate-y-[45px]" : ""}`}
      >
        <div className="  h-[45px] xl:border-b border-b-[rgba(42,36,36,0.07)] lg:flex hidden items-center  flex-wrap -mt-[0rem] -mr-[0.375rem] -ml-[0.375rem]  ">
          <div className="lg:flex-none  lg:w-1/2 px-[3rem] flex text-left max-w-full mt-0 ">
            <small className="flex text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mr-1 size-4"
              >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M16.272 10.272a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
                  <path d="M5.794 16.518a9 9 0 1 1 12.724-.312l-6.206 6.518zm11.276-1.691l-4.827 5.07l-5.07-4.827a7 7 0 1 1 9.897-.243"></path>
                </g>
              </svg>
              123 Street, New York, USA
            </small>
            <small className="flex ms-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 size-4"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"
                ></path>
              </svg>
              info@example.com
            </small>
          </div>
          <div className="flex justify-end gap-2 px-5 lg:flex-none lg:w-1/2 text-end">
            <small>Follow us:</small>
            <a className="text-[#555] " href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path>
              </svg>
            </a>
            <a className="text-[#555]  " href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="-2 -4 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 1.907a8.3 8.3 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.4 8.4 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04q0 .476.106.92A11.7 11.7 0 0 1 1.393.754a3.96 3.96 0 0 0-.554 2.03a4.02 4.02 0 0 0 1.824 3.363A4.15 4.15 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.2 4.2 0 0 1-1.08.141q-.397 0-.773-.075a4.1 4.1 0 0 0 3.832 2.807a8.3 8.3 0 0 1-5.095 1.727q-.498-.001-.979-.056a11.73 11.73 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.1 8.1 0 0 0 20 1.907"
                ></path>
              </svg>
            </a>
            <a className="text-[#555]  " href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.4 1.4 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z"
                ></path>
              </svg>
            </a>
            <a className="text-[#555] " href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-between w-full p-4 overflow-auto max-sm:flex-col lg:px-6">
            <a className="text-[#555]  ms-3" href="/">
              <h1 className="font-[700] text-[#3cb815]  text-[8vw] lg:text-[3vw] m-0">
                F<span className="text-[#F65005]">oo</span>dy
              </h1>
            </a>
            <div className="flex items-center justify-center">
              <div className="bg-[#3cb815] text-white w-fit   rounded-xl flex-nowrap flex justify-center ml-7 items-center   py-2 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
                  ></path>
                </svg>
                <input
                  type="text"
                  className="bg-transparent focus:outline-none w-[40vw] max-sm:w-full   focus:bg-[#509018] pl-4 rounded-md"
                />
              </div>
            </div>

            <div className="items-center hidden gap-2 sm:flex ">
              <button className="bg-[#3cb815] text-white  flex flex-row rounded-xl p-2   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="M12.721 5.003L11.255 5c-3.344-.008-6.247 2.709-6.27 6v3.79c0 .79-.1 1.561-.531 2.218l-.287.438C3.73 18.11 4.2 19 4.985 19h14.03c.785 0 1.254-.89.818-1.554l-.287-.438c-.43-.657-.531-1.429-.531-2.219v-3.788c-.04-3.292-2.95-5.99-6.294-5.998M15 19a3 3 0 1 1-6 0"></path>
                    <path d="M12 2a2 2 0 0 1 2 2v1h-4V4a2 2 0 0 1 2-2"></path>
                  </g>
                </svg>
              </button>
              <button className="bg-[#3cb815] text-white flex flex-row  rounded-xl  p-2  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <circle cx={12} cy={8} r={5}></circle>
                    <path d="M20 21a8 8 0 0 0-16 0"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headder;
