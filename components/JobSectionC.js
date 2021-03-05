import Link from "next/link";
import Title from "./Text/Title";
const JobSectionC = () => {
  return (
    <div className="flex flex-col sm:flex-row card bg-deep-black">
      <div className="flex flex-row w-full h-auto overflow-visible bg-transparent sm:w-5/12 image-section">
        <img loading="lazy" 
          className="z-20 object-cover w-4/12 sliced-image"
          src="/images/padraig-treanor-A66iN9J4xlE-unsplash.webp"
          alt=""
        />
        <img loading="lazy" 
          className="z-10 object-cover w-5/12 sliced-image"
          src="/images/wahid-khene-iKdQCIiSMlQ-unsplash.webp"
          alt=""
        />
        <img loading="lazy" 
          className="object-cover w-1/2 sliced-image"
          src="/images/dorinel-panaite-l2PqLSd8YNA-unsplash.webp"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center w-full px-4 py-6 space-y-2 sm:p-0 sm:pl-8 sm:w-7/12">
        <Title color="white">Vidéaste</Title>
        <p className="lg:text-lg text-gray-clay">
          Qu’est-ce qu’un vidéaste ? C’est à travers de cet article que vous trouverez beaucoup d’informations sur ce
          métier très vaste. Vous découvrirez notamment les missions qui lui sont confiées et comment parvenir à exercer
          ce métier ? Quelles sont les formations qui existent ? Dans cet article, vous apprendrez à connaître ce métier
          dans les moindres détails afin que vous osiez peut-être à faire le pas pour devenir l’un de ces artistes de
          l’image...
        </p>
        <Link href="/videaste">
          <a className="link">Découvrir le métier de Vidéaste →</a>
        </Link>
      </div>
    </div>
  );
};

export default JobSectionC;
