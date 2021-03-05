import Link from "next/link";
import ITWIcon from "./svg/ITWIcon";
import Title from "./Text/Title";
const JobSectionB = () => {
  return (
    <div className="flex flex-col bg-white sm:flex-row-reverse card">
      <div className="flex flex-row w-full h-auto overflow-visible bg-transparent sm:w-5/12 image-section">
        <img loading="lazy"  className="object-cover w-1/2 sliced-image-alt" src="/images/desktop-ui.webp" alt="" />
        <img loading="lazy"  className="object-cover w-5/12 sliced-image-alt" src="/images/raibow-ipad.webp" alt="" />
        <img loading="lazy"  className="object-cover w-4/12 sliced-image-alt" src="/images/jacob-miller-ot5kWZkH97s-unsplash.webp" alt="" />
      </div>
      <div className="flex flex-col justify-center w-full px-4 py-6 space-y-2 sm:text-right sm:items-end sm:p-0 sm:w-7/12 sm:pr-8">
        <Title>
          <ITWIcon />
          Motion Designer{" "}
        </Title>
        <p className="lg:text-lg text-gravel">
          "Le motion design consiste à donner vie à du design, à des graphismes". C'est la définition que donne Benjamin
          Ulmet à son métier de motion designer lors d'une interview réalisée pour découvrir ce métier. Vous
          trouverez une description du métier qui allie réalisation graphique et animation, ainsi que de son
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
