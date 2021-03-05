import React from "react";

const InfoSection = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="flex items-start justify-center p-3 space-x-5 bg-gray-500 rounded-lg md:p-6 md:items-center">
        <div className="inline-flex flex-col items-center justify-center w-10 p-2 bg-gray-400 rounded-full">
          <img loading="lazy" src="/images/light-bulb.png" alt="" />
        </div>
        <div className="flex flex-col w-full space-y-2 text-xs md:text-sm">
          <p className="w-full text-justify text-white">
            Vanon & moi-même (Mattèo) apprécions particulièrement le domaine de l’audiovisuel et du développement web,
            c’est pourquoi nous nous sommes lancés le défi de faire un rendu sous forme d’interview vidéo et d’un site
            web regroupant les informations à propos de métiers abordés ainsi que les interviews que nous avons réalisées.
          </p>
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2 justify-self-end">
            <p className="flex items-center justify-center italic text-white">
              Si vous souhaitez découvrir nos profils{" "}
              <img loading="lazy" className="inline w-4 ml-2 align-middle" src="/images/smiling-face.png" alt="" />
            </p>
            <div className="flex space-x-2">
              <a
                href="https://www.instagram.com/vanonborget/"
                className="flex items-center justify-center px-2 py-1 bg-white rounded"
              >
                <p className="text-sm">Vanon Borget ↗ </p>
              </a>
              <a href="https://mattèo.dev" className="flex items-center justify-center px-2 py-1 bg-white rounded">
                <p className="text-sm">Mattèo Gauthier ↗</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
