import { useEffect } from "react";

const ITW = () => {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);
  return (
    <div className="px-4 md:px-8">
      <h2 className="md:pl-3 mb-5 text-2xl text-gray-900 xl:text-4xl font-display job-heading-itw job-heading" id="itw">
        L’interview d’un Product Designer
      </h2>
      <div className="flex flex-col md:space-x-5 md:flex-row product-designer-text">
        <p className="md:w-2/3 ">
          Pour mieux comprendre le métier de Product Designer, nous avons choisis d’interviewer un professionnel du
          métier, il se nomme Aymeric Delpeuch et il fait le métier de Product Designer, aujourd’hui il travaille au
          sein de l’agence web BeTomorrow, nous nous sommes déplacés dans les locaux de l’agence. La réalisation de
          l'interview nous à permis de travailler le domaine de l'audiovisuel.
        </p>
        <div className="w-full mt-2 md:mt-0 md:w-1/3">
        <lite-youtube
            className="rounded-lg shadow-lg"
            videoId="2-g96TuTVSQ"
            playlabel="Interview Aymeric Delpeuch - MMI 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default ITW;
