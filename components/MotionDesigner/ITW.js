import { useEffect } from "react";

const ITW = () => {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);
  return (
    <div className="px-8">
      <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading-itw job-heading">
        L’interview d’un Motion Designer
      </h2>
      <div className="flex space-x-5 product-designer-text">
        <p className="w-2/3 ">
          Nous avons choisi de réaliser une interview pour parler du métier de motion designer d’une façon différente
          qu’un simple exposé, l’objectif est d’avoir le point de vue d’un professionnel du métier pour connaître les
          réalités de terrain. Benjamin Ulmet est un motion designer, à travers l’interview que nous avons réalisée vous
          allez découvrir durant ces 20 min d’interview son parcours, ses activités professionnels, les différentes
          missions qu’il a réalisées, le recrutement et plein d’autres informations surement utiles pour découvrir ce
          métier.
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
  );
};

export default ITW;
