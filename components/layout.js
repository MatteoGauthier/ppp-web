import Link from "next/link";

import { CreatorName, ProjectName } from "../components/svg";
export default function Layout({ children }) {
  return (
    <>
      <div className="h-full pt-2 xl:pt-24 bg-gradient-to-b from-darkA to-darkB">
        <main className="m-4 mb-6 xl:m-0 xl:mb-12 xl:mx-auto xl:max-w-screen-xl main">
          <div className="flex flex-col items-center justify-between px-3 pt-6 pb-10 uppercase xl:h-6 lg:pt-0 lg:pb-3 lg:flex-row text-yellowLight">
            <Link href="/">
              <a aria-label="Métiers du numérique">
                <ProjectName className="h-6 max-w-full overflow-hidden lg:h-full xl:h-full" />
              </a>
            </Link>
            <div>
              <CreatorName className="h-full max-w-full mt-1 overflow-hidden lg:mt-0" />
            </div>
            {/* <span>Métiers du numérique</span>
          <span>vanon borget - Mattèo gauthier</span> */}
          </div>
          <div className="overflow-hidden rounded">{children}</div>
        </main>
        <footer className="flex items-center justify-center pt-6 pb-8 space-x-10 xl:pt-12 xl:pb-24">
          <Link href="/">
            <a className="text-lg text-gravel-bright"> Home</a>
          </Link>
          <a className="text-lg text-gravel-bright" href="https://github.com/MatteoGauthier/ppp-web">
            Github
          </a>
          <a className="text-lg text-gravel-bright" href="https://twitter.com/MatteoGauthier_">
            Contact
          </a>
        </footer>
      </div>
    </>
  );
}
