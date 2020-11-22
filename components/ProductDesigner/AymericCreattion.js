import { ArrowDown, ArrowLeft, DribbleIcon, TwitterIcon, LinkedinIcon, BehanceIcon } from "../svg";
import { useEffect } from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";

const AymericCreattion = () => {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);
  return (
    <div className="space-y-8">
      <div className="px-8">
        <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading-whats job-heading">
          Qu’est-ce qu’un Product Designer ?
        </h2>
        <div className="flex space-x-5 product-designer-text">
          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis in at morbi est pellentesque pretium.
            Tempus diam eu augue phasellus posuere. Sit maecenas sed pulvinar nullam viverra bibendum arcu aliquam. Et
            lacus, in fames bibendum enim odio urna. Sed aliquet euismod vel enim lorem interdum donec venenatis metus.
            Id dui, ipsum dui risus, tincidunt sit pellentesque. Lacus eget leo non amet, nec. Amet in sit orci,
            faucibus facilisi molestie{" "}
          </p>
          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis in at morbi est pellentesque pretium.
            Tempus diam eu augue phasellus posuere. Sit maecenas sed pulvinar nullam viverra bibendum arcu aliquam. Et
            lacus, in fames bibendum enim odio urna. Sed aliquet euismod vel enim lorem interdum donec venenatis metus.
            Id dui, ipsum dui risus, tincidunt sit pellentesque. Lacus eget leo non amet, nec. Amet in sit orci,
            faucibus facilisi molestie{" "}
          </p>
          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis in at morbi est pellentesque pretium.
            Tempus diam eu augue phasellus posuere. Sit maecenas sed pulvinar nullam viverra bibendum arcu aliquam. Et
            lacus, in fames bibendum enim odio urna. Sed aliquet euismod vel enim lorem interdum donec venenatis metus.
            Id dui, ipsum dui risus, tincidunt sit pellentesque. Lacus eget leo non amet, nec. Amet in sit orci,
            faucibus facilisi molestie{" "}
          </p>
        </div>
      </div>

      <div className="px-8">
        <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading-parcours job-heading">
          Quels parcours-étude ?
        </h2>
        <div className="flex space-x-5 product-designer-text">
          <p className="w-2/3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim curabitur aliquet euismod risus volutpat
            aliquam leo neque. Mauris eleifend ullamcorper tortor, nulla purus morbi et posuere. At arcu sed hendrerit
            morbi nec dolor. Suspendisse eu elementum amet lorem cras egestas cras. Vestibulum eu, mauris non hac est
            arcu proin. Amet non, neque blandit posuere. Pretium ipsum sit consectetur accumsan tellus. Aliquam amet,
            massa est ornare semper dignissim. Non sem hendrerit varius lorem egestas et. Lorem neque dui ornare auctor
            enim arcu. Purus a amet, erat et integer est elementum urna. In elit eget mattis laoreet nibh in id cursus
            nam. Integer mauris convallis massa diam facilisis ut posuere. Sodales at auctor mauris, viverra
            scelerisque. Nunc eu nisl porta viverra. Gravida adipiscing at purus volutpat a, nec. Sed viverra ac,
            natoque duis dolor. Scelerisque scelerisque suspendisse.
          </p>
          <p className="w-1/3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis in at morbi est pellentesque pretium.
            Tempus diam eu augue phasellus posuere. Sit maecenas sed pulvinar nullam viverra bibendum arcu aliquam. Et
            lacus, in fames bibendum enim odio urna. Sed aliquet euismod vel enim lorem interdum donec venenatis metus.
            Id dui, ipsum dui risus, tincidunt sit pellentesque. Lacus eget leo non amet, nec. Amet in sit orci,
            faucibus facilisi molestie{" "}
          </p>
        </div>
      </div>

      <div className="px-8">
        <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading-itw job-heading">
          L’interview d’un Product Designer
        </h2>
        <div className="flex space-x-5 product-designer-text">
          <p className="w-2/3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim curabitur aliquet euismod risus volutpat
            aliquam leo neque. Mauris eleifend ullamcorper tortor, nulla purus morbi et posuere. At arcu sed hendrerit
            morbi nec dolor. Suspendisse eu elementum amet lorem cras egestas cras. Vestibulum eu, mauris non hac est
            arcu proin. Amet non, neque blandit posuere. Pretium ipsum sit consectetur accumsan tellus. Aliquam amet,
            massa est ornare semper dignissim. Non sem hendrerit varius lorem egestas et. Lorem neque dui ornare auctor
            enim arcu. Purus a amet, erat et integer est elementum urna. In elit eget mattis laoreet nibh in id cursus
            nam. Integer mauris convallis massa diam facilisis ut posuere. Sodales at auctor mauris, viverra
            scelerisque. Nunc eu nisl porta viverra. Gravida adipiscing at purus volutpat a, nec. Sed viverra ac,
            natoque duis dolor. Scelerisque scelerisque suspendisse.
          </p>
          <div className="w-1/3 ">
            <lite-youtube
              class="rounded-lg shadow-lg"
              videoId="2-g96TuTVSQ"
              playlabel="Interview Aymeric Delpeuch - MMI 2020"
            />
          </div>
        </div>
      </div>
      
      <div className="px-8">
        <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading job-heading-two">
          Les créations d’Aymeric
        </h2>
        <div className="grid grid-cols-6 grid-rows-2 gap-5 job-grid-first">
          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div>
              <span className="w-full text-2xl font-bold leading-none text-cool-gray-900">Dark Calendar App</span>
              <span className="self-start text-lg leading-normal text-gray-700 pt-2.5">UX - UI</span>
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
              <span className="self-start text-lg leading-normal text-gray-700">Mobile design</span>
              <span className="w-full text-2xl font-bold leading-none pt-2.5 text-cool-gray-900">Dorie hiking App</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-2 space-y-4" id="follow-aymeric">
            <span className="text-3xl font-bold text-center text-white">Follow Aymeric on</span>
            <div className="flex space-x-4">
              <DribbleIcon />
              <TwitterIcon />
              <LinkedinIcon />
              <BehanceIcon />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full px-2.5 py-4 rounded-lg ">
            <div>
              <span className="self-start text-lg leading-normal text-right text-gray-700">Mobile Design</span>
              <span className="w-full text-2xl font-bold leading-none text-right text-cool-gray-900 pt-2.5">
                EverReady App
              </span>
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
