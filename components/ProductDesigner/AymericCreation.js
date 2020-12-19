import { ArrowDown, ArrowLeft, DribbleIcon, TwitterIcon, LinkedinIcon, BehanceIcon } from "../svg";
import { useEffect } from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";
import Whats from "./Whats";

const AymericCreation = () => {
  return (
    <div className="px-4 md:px-8">
      <h2 className="md:pl-3 mb-5 text-2xl text-gray-900 xl:text-4xl font-display job-heading job-heading-two">
        Les créations d’Aymeric
      </h2>
      <div className="hidden grid-cols-6 grid-rows-2 gap-5 md:grid job-grid-first">
        <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
          <div>
            <span className="w-full text-2xl font-bold leading-none text-cool-gray-900">Dark Calendar App</span>
            <span className="self-start text-lg leading-normal text-true-gray-700 pt-2.5">UX - UI</span>
          </div>
          <div className="relative self-end">
            <ArrowDown />
          </div>
        </div>
        <a
          aria-label="Dribble link to creation"
          href="https://dribbble.com/shots/13926981-Dorie-Interactive-and-ecotourism-walks"
          className="relative row-span-2"
        >
          <img loading="lazy" 
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
            <a aria-label="Aymeric Dribble" href="https://dribbble.com/aymericdelpeuch">
              <DribbleIcon />
            </a>
            <a aria-label="Aymeric Twitter" href="https://twitter.com/DelayDesign">
              <TwitterIcon />
            </a>
            <a aria-label="Aymeric Linkedin" href="https://www.linkedin.com/in/aymeric-delpeuch-33a00115b/">
              <LinkedinIcon />
            </a>
            <a aria-label="Aymeric Behance" href="https://www.behance.net/DelayDesign">
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
        <a href="https://aymeric-delpeuch.com/snark-calendar-app" className="relative ">
          <img loading="lazy" 
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/DarkCalendarApp.webp"
            alt="Dark Calendar App preview"
          />
        </a>
        <a href="https://aymeric-delpeuch.com/digital-aquitaine-branding" className="relative col-span-2">
          <img loading="lazy" 
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/book product.webp"
            alt="Digital aquitaine branding"
          />
        </a>
        <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
          <div className="relative self-start">
            <ArrowLeft />
          </div>
          <div>
            <p className="self-start text-lg leading-normal text-true-gray-700">Branding - Motion</p>
            <p className="w-full text-2xl font-bold leading-none pt-2.5 text-cool-gray-900 tracking-tight">
              Brand product design
            </p>
          </div>
        </div>
        <a
          aria-label="Dribble link to creation"
          href="https://dribbble.com/shots/14299910-EverReady-App"
          className="relative"
        >
          <img loading="lazy" 
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/ever ready app.webp"
            alt="EverReady app"
          />
        </a>
      </div>
      <div className="grid grid-cols-2 grid-rows-4 gap-5 md:hidden job-grid-first job-grid-alt">
        <a
          aria-label="Dribble link to creation"
          href="https://dribbble.com/shots/13926981-Dorie-Interactive-and-ecotourism-walks"
          className="relative h-full row-span-2"
        >
          <img loading="lazy" 
            className="absolute inset-0 object-cover w-full h-full rounded-lg "
            src="/images/parcours.webp"
            alt="Dorie app parcours image"
          />
        </a>

        <a href="https://aymeric-delpeuch.com/snark-calendar-app" className="relative ">
          <img loading="lazy" 
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/DarkCalendarApp.webp"
            alt="Dark Calendar App preview"
          />
        </a>
        <a
          aria-label="Dribble link to creation"
          href="https://dribbble.com/shots/14299910-EverReady-App"
          className="relative"
        >
          <img loading="lazy" 
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/ever ready app.webp"
            alt="EverReady app"
          />
        </a>

        <div className="flex flex-col items-center justify-center col-span-2 space-y-4" id="follow-aymeric">
          <span className="text-3xl font-bold text-center text-white">Follow Aymeric on</span>
          <div className="flex space-x-4">
            <a aria-label="Aymeric Dribble" href="https://dribbble.com/aymericdelpeuch">
              <DribbleIcon />
            </a>
            <a aria-label="Aymeric Twitter" href="https://twitter.com/DelayDesign">
              <TwitterIcon />
            </a>
            <a aria-label="Aymeric Linkedin" href="https://www.linkedin.com/in/aymeric-delpeuch-33a00115b/">
              <LinkedinIcon />
            </a>
            <a aria-label="Aymeric Behance" href="https://www.behance.net/DelayDesign">
              <BehanceIcon />
            </a>
          </div>
        </div>


        <a href="https://aymeric-delpeuch.com/digital-aquitaine-branding" className="relative col-span-2">
          <img loading="lazy" 
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
            src="/images/book product.webp"
            alt="Digital aquitaine branding"
          />
        </a>


      </div>
    </div>
  );
};

export default AymericCreation;
