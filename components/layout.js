import Link from "next/link";

import { CreatorName, ProjectName } from "../components/svg";
export default function Layout({ children }) {
  return (
    <>
      <div className="h-full pt-24 bg-gradient-to-b from-darkA to-darkB">
        <main className="max-w-screen-xl mx-auto mb-12 main">
          <div className="flex justify-between px-3 pb-3 uppercase text-yellowLight">
            <Link href="/">
              <a aria-label="Métiers du numérique">
                <ProjectName />
              </a>
            </Link>
            <CreatorName />
            {/* <span>Métiers du numérique</span>
          <span>vanon borget - Mattèo gauthier</span> */}
          </div>
          <div className="overflow-hidden rounded">{children}</div>
        </main>
        <footer className="flex items-center justify-center pt-12 pb-24 space-x-10">
          <a className="text-lg text-gravel-bright" href="#">
            À propos
          </a>
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
