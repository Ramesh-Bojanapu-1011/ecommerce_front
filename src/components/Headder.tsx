const Headder = () => {
  return (
    <>
      <div
        className={`mx-auto transition duration-500 max-sm:bg-[#424b40] max-sm:h-44  px-0 fixed w-full`}
      >
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
