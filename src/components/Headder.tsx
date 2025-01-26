// 'use client';
import React from 'react';

const Headder = () => {
  return (
    <div>
      <header className="bg-[#f9f9f9]">
        <div className="flex  items-center space-x-7 p-4 mx-auto max-w-7xl">
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
                <div className="text-[#333] hover:text-[#666]">
                  <a href="/signin">
                    <button className="bg-black text-[#fff] px-2 py-1">
                      Sign In
                    </button>
                  </a>
                  <a href="/cart">
                    <button className="bg-black text-[#fff] px-2 py-1">
                      Cart
                    </button>
                  </a>
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
