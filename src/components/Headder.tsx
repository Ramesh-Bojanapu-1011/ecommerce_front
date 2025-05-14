import React from "react";

const Headder = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 45); // 45px is the height of the top div
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`mx-auto transition duratioon-500 max-sm:bg-[#424b40] max-sm:h-44  px-0 fixed top-0 right-0 left-0 z-[1030] ${
        isScrolled ? "sm:transform sm:-translate-y-[45px]" : ""
      }`}
    >
      <div className="h-[45px] xl:border-b border-b-[rgba(42,36,36,0.07)] lg:flex hidden items-center  flex-wrap -mt-[0rem] -mr-[0.375rem] -ml-[0.375rem] fadeIn ">
        <div className="lg:flex-none lg:w-1/2 px-[3rem] flex text-left max-w-full mt-0 ">
          <small className="text-left flex items-center ">
            <svg
              className="me-1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <circle cx={12} cy={10} r={3}></circle>
                <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"></path>
              </g>
            </svg>
            123 Street, New York, USA
          </small>
          <small className="ms-4 flex items-center">
            <svg
              className="me-1"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m-9.684 7.316l1.602 1.4c.305.266.691.398 1.082.398s.777-.133 1.082-.398l1.602-1.4l-.037.037l3.646 3.646H5.707l3.646-3.646zM5 17.293V10.54l3.602 3.151zm10.398-3.602L19 10.54v6.75zM19 9v.21l-6.576 5.754a.68.68 0 0 1-.848 0L5 9.21V9z"
              ></path>
            </svg>
            info@example.com
          </small>
        </div>
        <div className="lg:flex-none flex justify-end lg:w-1/2 px-5 text-end">
          <small>Follow us:</small>
          <a className="text-[#555]  ms-3" href="/" title="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <path
                fill="#1877f2"
                d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
              />
              <path
                fill="#fff"
                d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
              />
            </svg>
          </a>
          <a className="text-[#555]  ms-3" href="/" title="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#1d9bf0" rx="60" />
                <path
                  fill="#fff"
                  d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                />
              </g>
            </svg>
          </a>
          <a className="text-[#555]  ms-3" href="/" title="Linkedin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#0a66c2" rx="60" />
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                />
              </g>
            </svg>
          </a>
          <a className="text-[#555] ms-3" href="/" title="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <g fill="none">
                <rect
                  width="256"
                  height="256"
                  fill="url(#skillIconsInstagram0)"
                  rx="60"
                />
                <rect
                  width="256"
                  height="256"
                  fill="url(#skillIconsInstagram1)"
                  rx="60"
                />
                <path
                  fill="#fff"
                  d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                />
                <defs>
                  <radialGradient
                    id="skillIconsInstagram0"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fd5" />
                    <stop offset=".1" stopColor="#fd5" />
                    <stop offset=".5" stopColor="#ff543e" />
                    <stop offset="1" stopColor="#c837ab" />
                  </radialGradient>
                  <radialGradient
                    id="skillIconsInstagram1"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3771c8" />
                    <stop offset=".128" stopColor="#3771c8" />
                    <stop offset="1" stopColor="#60f" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <div className="flex  max-sm:flex-col  justify-between w-full overflow-auto p-4 lg:px-6">
          <a className="text-[#555]  ms-3" href="/">
            <h1 className="font-[700] text-[#3cb815]  text-[8vw] lg:text-[3vw] m-0">
              F<span className="text-[#F65005]">oo</span>dy
            </h1>
          </a>
          <div className="flex justify-center items-center">
            <div className="bg-[#3cb815] text-white w-fit   rounded-xl flex-nowrap flex justify-center ml-7 items-center   py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                className="me-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0"
                ></path>
              </svg>
              <input
                type="text"
                className="bg-transparent focus:outline-none w-[40vw] max-sm:w-full   focus:bg-[#509018] pl-4 rounded-md"
                placeholder="Search..."
                title="Search"
              />
            </div>
          </div>

          <div className="items-center hidden gap-2 sm:flex ">
            <button
              type="submit"
              className="bg-[#3cb815] text-white  flex flex-row rounded-xl p-2   "
              title="Notifications"
              aria-label="Notifications"
            >
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
            <button
              type="submit"
              className="bg-[#3cb815] text-white flex flex-row  rounded-xl  p-2  "
              title="Profile"
              aria-label="Profile"
            >
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
  );
};

export default Headder;
