import React from "react";

const Money = () => {
  return (
    <div className="px-8">
      <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading-parcours job-heading" id="path">
        La rémunération d’un vidéaste
      </h2>
      <div className="flex space-x-5 product-designer-text">
        <p className="col-count-3">
          Le vidéaste possède un salaire qui fluctue en fonction de son statut (freelance/salarié en entreprise). En
          freelance, les débuts sont compliqués financièrement parlant par manque de réseau. En général, le technicien
          vidéo a souvent le statut d’intermittent du spectacle, avec des horaires variables en fonction de l'événement
          à filmer. Entre 170 € et 180 € brut la journée, entre 750 € et 830 € brut la semaine, selon les conditions de
          tournage (nuit/jour).
        </p>
      </div>
    </div>
  );
};

export default Money;
