import { ArrowDown, ArrowLeft, DribbleIcon, TwitterIcon, LinkedinIcon, BehanceIcon } from "../svg";
import { useEffect } from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";
import Whats from "./Whats";

const AymericCreation = () => {
  return (
    <div className="px-8">
      <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading job-heading-two">
        Les créations d’Aymeric
      </h2>
      <div className="grid grid-cols-6 grid-rows-2 gap-5 job-grid-first">
        <a className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
          <div>
            <span className="w-full text-2xl font-bold leading-none text-cool-gray-900">Dark Calendar App</span>
            <span className="self-start text-lg leading-normal text-true-gray-700 pt-2.5">UX - UI</span>
          </div>
          <div className="relative self-end">
            <ArrowDown />
          </div>
        </a>
        <a href="https://dribbble.com/shots/13926981-Dorie-Interactive-and-ecotourism-walks" className="relative row-span-2">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg "
            src="/images/parcours.webp"
            alt="Dorie app parcours image"
          />
        </a>

        <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
          <div className="relative self-start">
            <ArrowLeft />
          </div>
          <div>
            <span className="self-start text-lg leading-normal text-true-gray-700">Mobile design</span>
            <span className="w-full text-2xl font-bold leading-none pt-2.5 text-cool-gray-900">Dorie hiking App</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 space-y-4" id="follow-aymeric">
          <span className="text-3xl font-bold text-center text-white">Follow Aymeric on</span>
          <div className="flex space-x-4">
            <a href="https://dribbble.com/aymericdelpeuch">
              <DribbleIcon />
            </a>
            <a href="https://twitter.com/DelayDesign">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/in/aymeric-delpeuch-33a00115b/">
              <LinkedinIcon />
            </a>
            <a href="https://www.behance.net/DelayDesign">
              <BehanceIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
          <div>
            <span className="self-start text-lg leading-normal text-right text-true-gray-700">Mobile Design</span>
            <span className="w-full text-2xl font-bold leading-none text-right text-cool-gray-900 pt-2.5">
              EverReady App
            </span>
          </div>
          <div className="relative self-end">
            <ArrowDown />
          </div>
        </div>
        <a href="https://aymeric-delpeuch.com/snark-calendar-app  " className="relative ">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/DarkCalendarApp.webp"
            alt="Dark Calendar App preview"
          />
        </a>
        <a href="https://aymeric-delpeuch.com/digital-aquitaine-branding" className="relative col-span-2">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/book product.webp"
            alt="Dark Calendar App preview"
          />
        </a>
        <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
          <div className="relative self-start">
            <ArrowLeft />
          </div>
          <div>
            <p className="self-start text-lg leading-normal text-true-gray-700">Branding - Motion</p>
            <p className="w-full text-2xl font-bold leading-none pt-2.5 text-cool-gray-900 tracking-tight">Brand product design</p>
          </div>
        </div>
        <a href="https://dribbble.com/shots/14299910-EverReady-App" className="relative">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/ever ready app.webp"
            alt="Dark Calendar App preview"
          />
        </a>
      </div>
    </div>
  );
};

export default AymericCreation;
