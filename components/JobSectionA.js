import Link from "next/link";
import Image from "next/image";
import Title from "./Text/Title";
import ITWIcon from "./svg/ITWIcon";
const JobSectionA = () => {
  return (
    <div className="flex flex-col sm:flex-row card bg-deep-black">
      <div className="flex flex-row w-full h-auto overflow-visible bg-transparent sm:w-5/12 image-section">
        {/* <Image width={} className="z-20 object-cover w-4/12 sliced-image" src="/images/kelly-sikkema-v9FQR4tbIq8-unsplash (1).webp" alt="" /> */}
        <img loading="lazy" 
          className="z-20 object-cover w-4/12 sliced-image"
          src="/images/kelly-sikkema-v9FQR4tbIq8-unsplash (1).webp"
          alt=""
        />
        <img loading="lazy" 
          className="z-10 object-cover w-5/12 sliced-image"
          src="/images/brad-neathery-mGH253KbfaY-unsplash (1).webp"
          alt=""
        />
        <img loading="lazy"  className="object-cover w-1/2 sliced-image" src="/images/mia-baker-klRB1BB9pV8-unsplash (2).webp" alt="" />
      </div>
      <div className="flex flex-col justify-center w-full px-4 py-6 space-y-2 sm:w-7/12 sm:p-0 sm:pl-8">
        <Title color="white">Product Designer <ITWIcon/></Title>
        <p className="lg:text-lg text-gray-clay">
          Le product design est présent dans votre quotidien, dans votre placard, dans votre cuisine, il sait mettre vit
          à vos objet du quotidien. Découvrez le métier de product designer à travers une description de son parcours et
          de ses réalisations. Nous avons interviewé Aymeric Delpeuch lui-même Product Designer pour vous permettre de
          mieux comprendre est d'avoir une approche réaliste du métier.
        </p>
        <Link href="/product-designer">
          <a className="link">Découvrir le métier de Product Designer →</a>
        </Link>
      </div>
    </div>
  );
};

export default JobSectionA;
