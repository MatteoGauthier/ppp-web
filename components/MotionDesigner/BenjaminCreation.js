import { ArrowDown, ArrowLeft, DribbleIcon, TwitterIcon, LinkedinIcon, BehanceIcon } from "../svg";
import { useEffect } from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";

const BenjaminCreation = () => {
  return (
    <div className="space-y-8">
      <div className="px-8">
        <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading job-heading-two">
          Les créations de Benjamin
        </h2>
        <div className="grid grid-cols-6 grid-rows-2 gap-5 job-grid-first">
          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div>
              <span className="w-full text-2xl font-bold leading-none text-cool-gray-900">Payfit Logo Evolution</span>
              <span className="self-start text-lg leading-normal text-gray-700 pt-2.5">Brand motion</span>
            </div>
            <div className="relative self-end">
              <ArrowDown />
            </div>
          </div>
          <a href="https://dribbble.com/shots/8387031-Aircall-Assets-Guidelines" className="relative row-span-2">
            <img
              className="absolute inset-0 object-cover w-full h-full rounded-lg "
              src="/images/aircall.webp"
              alt="Aircall motion design"
            />
          </a>

          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div className="relative self-start">
              <ArrowLeft />
            </div>
            <div>
              <span className="self-start text-lg leading-normal text-gray-700">Motion design</span>
              <span className="w-full text-2xl font-bold leading-none pt-2.5 text-cool-gray-900">Aircall Assets Guidelines</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-2 space-y-4" id="follow-aymeric">
            <span className="text-3xl font-bold text-center text-white">Follow Benjamin on</span>
            <div className="flex space-x-4">
              <a href="https://dribbble.com/benjaminulmet">
                <DribbleIcon />
              </a>
              <a href="https://twitter.com/benjaminulmet">
                <TwitterIcon />
              </a>
              <a href="https://www.linkedin.com/in/benjaminulmet/">
                <LinkedinIcon />
              </a>
              <a href="https://www.behance.net/benjaminulmet">
                <BehanceIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div>
              <span className="self-start text-lg leading-normal text-right text-gray-700">UI showcase</span>
              <span className="w-full text-2xl font-bold leading-none text-right text-cool-gray-900 pt-2.5">
                Lattice UI Motion
              </span>
            </div>
            <div className="relative self-end">
              <ArrowDown />
            </div>
          </div>
          <a href="https://dribbble.com/shots/4164375-PayFit-Logo-Evolution" className="relative ">
            <img
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
              src="/images/payfit.webp"
              alt="Payfit Motion design"
            />
          </a>
          <a href="https://vimeo.com/467788094" className="relative col-span-2">
            <img
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
              src="/images/showreel.webp"
              alt="Benjamin Ulmet Showreel"
            />
          </a>
          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div className="relative self-start">
              <ArrowLeft />
            </div>
            <div className="self-start">
              <p className="self-start text-lg leading-normal text-true-gray-700">Compilation</p>
              <p className="w-full text-2xl font-bold leading-none pt-2.5 text-cool-gray-900">Showreel</p>
            </div>
          </div>
          <a href="https://dribbble.com/shots/8170699-Lattice-Logo-Animation" className="relative">
            <img
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
              src="/images/LATTICE.webp"
              alt="Lattice production"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BenjaminCreation;
