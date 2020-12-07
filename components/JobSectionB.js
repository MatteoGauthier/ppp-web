import Link from "next/link";
import ITWIcon from "./svg/ITWIcon";
import Title from "./Text/Title";
const JobSectionB = () => {
  return (
    <div className="flex flex-row-reverse bg-white card">
      <div className="flex flex-row w-5/12 h-auto overflow-visible bg-transparent image-section">
        <img className="object-cover w-1/2 sliced-image-alt" src="/images/desktop-ui.webp" alt="" />
        <img className="object-cover w-5/12 sliced-image-alt" src="/images/raibow-ipad.webp" alt="" />
        <img className="object-cover w-4/12 sliced-image-alt" src="/images/jacob-miller-ot5kWZkH97s-unsplash.webp" alt="" />
      </div>
      <div className="flex flex-col items-end justify-center w-7/12 pr-8 space-y-2 text-right">
        <Title>
          <ITWIcon />
          Motion Designer{" "}
        </Title>
        <p className="text-lg text-gravel">
          "Le motion design consiste à donner vie à du design, à des graphismes" c'est la définition que donne Benjamin
          Ulmet à son métier de motion designer lors d'une interview réalisée pour mieux appréhender ce métier. Vous
          pourrez aussi trouver une description de ce métier entre réalisation graphique et animation, ainsi que de son
          parcours de formation.
        </p>
        <Link href="/motion-designer">
          <a className="link-alt">Découvrir le métier de Motion Designer →</a>
        </Link>
      </div>
    </div>
  );
};

export default JobSectionB;
