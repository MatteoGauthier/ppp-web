import { CreatorName, ProjectName } from "../components/svg";
import css from "styled-jsx/css";

const styles = css`
  .card {
    max-height: 384px;
    height: 100%;
    width: 100%;
  }
`;

export default function IndexPage() {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="h-full pt-32 bg-gradient-to-b from-darkA to-darkB">
        <div className="">
          <div className="flex justify-between px-3 uppercase text-pinkLight">
            <ProjectName /> <CreatorName />
            {/* <span>Métiers du numérique</span>
          <span>vanon borget - Mattèo gauthier</span> */}
          </div>
          <div className="rounded ">
            {[1, 2, 3].map(() => (
              <div className="flex card bg-deep-black">
                <div className="w-5/12 h-full bg-gray-100">Product Designer</div>
                <div>
                  <h2 className="title">Product Designer</h2>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor vulputate vel et in morbi amet.
                    Tincidunt condimentum nisi, quam eget posuere facilisi porta. Nisi, urna sit consequat id magna
                    elementum leo. Feugiat eu mi in dignissim vestibulum. Lectus facilisis fermentum platea id aliquet
                    tellus vulputate enim. Nunc adipiscing dolor dignissim ut. Ut aliquet sit aliquet egestas praesent
                    elit non. Interdum eget eget ultrices pulvinar semper tincidunt. Sem fames ac nulla in egestas ut
                    velit morbi dolor quam.
                  </p>
                  <a href="#" className="link">Découvrir le métier de Product Designer →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
