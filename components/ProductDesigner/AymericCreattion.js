import { ArrowDown, ArrowLeft, DribbleIcon, TwitterIcon, LinkedinIcon, BehanceIcon } from "../svg";
import Image from "next/image";
const AymericCreattion = () => {
  return (
    <div>
      <div className="p-8">
        <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading-two">Les créations d’Aymeric</h2>
        <div className="grid grid-cols-6 grid-rows-2 gap-5 job-grid-first">
          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div>
              <p className="w-full text-2xl font-bold leading-none text-cool-gray-900">Dark Calendar App</p>
              <p className="self-start text-lg leading-normal text-gray-700 pt-2.5">UX - UI</p>
            </div>
            <div className="relative self-end">
              <ArrowDown />
            </div>
          </div>
          <div className="relative row-span-2">
            <img
              className="absolute inset-0 object-cover w-full h-full rounded-lg "
              src="/images/parcours.webp"
              alt="Dorie app parcours image"
            />
          </div>

          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div className="relative self-start">
              <ArrowLeft />
            </div>
            <div>
              <p className="self-start text-lg leading-normal text-gray-700">Mobile design</p>
              <p className="w-full text-2xl font-bold leading-none pt-2.5 text-cool-gray-900">Dorie hiking App</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-2 space-y-4" id="follow-aymeric">
            <p className="text-3xl font-bold text-center text-white">Follow Aymeric on</p>
            <div className="flex space-x-4">
              <DribbleIcon />
              <TwitterIcon />
              <LinkedinIcon />
              <BehanceIcon />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div>
              <p className="self-start text-lg leading-normal text-right text-gray-700">Mobile Design</p>
              <p className="w-full text-2xl font-bold leading-none text-right text-cool-gray-900 pt-2.5">
                EverReady App
              </p>
            </div>
            <div className="relative self-end">
              <ArrowDown />
            </div>
          </div>
          <div className="relative ">
            <img
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
              src="/images/DarkCalendarApp.webp"
              alt="Dark Calendar App preview"
            />
          </div>
          <div className="relative col-span-2">
            <img
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
              src="/images/book product.webp"
              alt="Dark Calendar App preview"
            />
          </div>
          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div className="relative self-start">
              <ArrowLeft />
            </div>
            <div>
              <p className="self-start text-lg leading-normal text-gray-700">Mobile design</p>
              <p className="w-full text-2xl font-bold leading-none pt-2.5 text-cool-gray-900">Dorie hiking App</p>
            </div>
          </div>
          <div className="relative">
            <img
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
              src="/images/ever ready app.webp"
              alt="Dark Calendar App preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AymericCreattion;
