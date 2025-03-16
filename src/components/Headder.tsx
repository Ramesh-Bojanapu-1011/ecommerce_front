'use client';
import {
  Bell,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Search,
  Twitter,
  User,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Headder = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 45); // 45px is the height of the top div
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div
        className={`mx-auto transition duratioon-500 max-sm:bg-[#424b40] max-sm:h-44  px-0 fixed top-0 right-0 left-0 z-[1030] ${isScrolled ? 'transform -translate-y-[45px]' : ''}`}
      >
        <div className="  h-[45px] xl:border-b border-b-[rgba(42,36,36,0.07)] lg:flex hidden items-center  flex-wrap -mt-[0rem] -mr-[0.375rem] -ml-[0.375rem]  ">
          <div className="lg:flex-none  lg:w-1/2 px-[3rem] flex text-left max-w-full mt-0 ">
            <small className="text-left flex">
              <MapPin className=" mr-1 size-4" />
              123 Street, New York, USA
            </small>
            <small className="ms-4 flex ">
              <Mail className=" mr-1  size-4" />
              info@example.com
            </small>
          </div>
          <div className="lg:flex-none flex lg:w-1/2 px-5 justify-end text-end">
            <small>Follow us:</small>
            <a className="text-[#555]  ms-3" href="/">
              <Facebook />
            </a>
            <a className="text-[#555]  ms-3" href="/">
              <Twitter />
            </a>
            <a className="text-[#555]  ms-3" href="/">
              <Linkedin />
            </a>
            <a className="text-[#555] ms-3" href="/">
              <Instagram />
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
                <Search className="me-2" />
                <input
                  type="text"
                  className="bg-transparent focus:outline-none w-[40vw] max-sm:w-full   focus:bg-[#509018] bg-white pl-4 rounded-md"
                />
              </div>
            </div>

            <div className="gap-2 sm:flex hidden items-center   ">
              <button className="bg-[#3cb815] text-white  flex flex-row rounded-xl p-2   ">
                <Bell />
              </button>
              <button className="bg-[#3cb815] text-white flex flex-row  rounded-xl  p-2  ">
                <User />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headder;
