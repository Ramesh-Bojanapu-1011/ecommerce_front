// 'use client';
import React from 'react';

const Headder = () => {
  return (
    <div>
      <header className="bg-[#f9f9f9]">
        <div className="flex  items-center space-x-7 px-4 py-1  mx-auto max-w-7xl">
          <div>
            <img src="/fkheaderlogo_plus-055f80.svg" alt="" />
          </div>

          <div className="flex items-center border border-[#00000048] gap-2 rounded-[5px] p-2">
            {/* Search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
              />
            </svg>
            {/* End Search icon */}
            <input
              type="text"
              className="border-collapse bg-transparent focus:outline-none w-[400px]"
            />
          </div>

          <div>
            <header>
              <div>
                <div className="text-[#333] gap-3 flex hover:text-[#666]">
                  <a href="/signin">
                    <button className="bg-black text-[#fff] px-2 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                      >
                        <rect width="24" height="24" fill="none" />
                        <g
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        >
                          <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                          <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                        </g>
                      </svg>
                    </button>
                  </a>

                  <button className=" ">
                    <a
                      href="/cart"
                      className="bg-black justify-center items-center text-[#fff] px-2 py-1 "
                    >
                      Cart
                    </a>
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headder;
