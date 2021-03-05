import { useEffect } from "react";

const ITW = () => {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);
  return (
    <div className="px-4 md:px-8">
      <h2 className="mb-5 text-2xl text-gray-900 md:pl-3 xl:text-4xl font-display job-heading-itw job-heading" id="itw">
        L’interview d’un Product Designer
      </h2>
      <div className="flex flex-col md:space-x-5 md:flex-row product-designer-text">
        <p className="md:w-2/3 ">
          Pour mieux comprendre le métier de Product Designer, nous avons choisi d’interviewer un professionnel du
          métier : il se nomme Aymeric Delpeuch et excerce le métier de Product Designer. Aujourd’hui il travaille au
          sein de l’agence web BeTomorrow à Bordeaux. Nous l'avons rencontrés pour qu'il nous présente en détail son métier.
        </p>
        <div className="w-full mt-2 md:mt-0 md:w-1/3">
        <lite-youtube
            className="rounded-lg shadow-lg"
            videoId="8XDrGKzNARU"
            playlabel="Interview Aymeric Delpeuch - MMI 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default ITW;
