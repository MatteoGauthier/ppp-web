import { useEffect } from "react";

const ITW = () => {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);
  return (
    <div className="px-4 md:px-8">
      <h2 className="mb-5 text-2xl text-gray-900 md:pl-3 xl:text-4xl font-display job-heading-itw job-heading" id="itw">
        L’interview d’un Motion Designer
      </h2>
      <div className="flex flex-col md:space-x-5 md:flex-row product-designer-text">
        <p className="md:w-2/3 ">
          Nous avons choisi de réaliser une interview pour parler du métier de motion designer d’une façon différente
          qu’un simple exposé, l’objectif est d’avoir le point de vue d’un professionnel du métier pour connaître les
          réalités de terrain. Benjamin Ulmet est un motion designer, à travers l’interview que nous avons réalisée vous
          allez découvrir durant ces 20 min d’interview son parcours, ses activités professionnels, les différentes
          missions qu’il a réalisées, le recrutement et plein d’autres informations surement utiles pour découvrir ce
          métier.
        </p>
        <div className="w-full mt-2 md:mt-0 md:w-1/3">
          <lite-youtube
            className="rounded-lg shadow-lg"
            videoId="1WXeh5-z_64"
            playlabel="Interview Benjamin Ulmet - MMI 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default ITW;
