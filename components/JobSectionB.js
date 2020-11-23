import Link from "next/link";
import Title from './Text/Title'
const JobSectionB = () => {
  return (
    <div className="flex flex-row-reverse bg-white card">
      <div className="flex flex-row w-5/12 h-auto overflow-visible bg-transparent image-section">
        <img className="object-cover w-1/2 sliced-image-alt" src="/images/j0dXzsTe2SU.webp" alt="" />
        <img className="object-cover w-5/12 sliced-image-alt" src="/images/hy7r6AvycgE.webp" alt="" />
        <img className="object-cover w-4/12 sliced-image-alt" src="/images/_-RFJf6-VM0.webp" alt="" />
      </div>
      <div className="flex flex-col items-end justify-center w-7/12 pr-8 space-y-2 text-right">
        <Title>Motion Designer</Title>
        <p className="text-lg text-gravel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan ac aliquam tempor, ut tincidunt nunc vel et.
          Condimentum consequat tempus, eu risus, augue massa leo. Netus cursus velit placerat egestas a, ultrices vel.
          Cras habitant tempus ultrices urna vel neque. Aliquam viverra ac vel, iaculis ut. Suscipit nunc et diam
          aliquam, varius tortor. Proin quis tincidunt pulvinar in. Enim auctor justo at dictum viverra non. Proin
          volutpat cursus nisl risus elit ultrices tempus luctus et.
        </p>
        <Link href="/motion-designer">
          <a className="link-alt">Découvrir le métier de Motion Designer →</a>
        </Link>
      </div>
    </div>
  );
};

export default JobSectionB;
