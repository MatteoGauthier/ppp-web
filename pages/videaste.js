import Title from "../components/Text/Title";
import Layout from "../components/layout";
import Head from "next/head";
import Whats from "../components/Videaste/Whats";
import Path from "../components/Videaste/Path";
import InfoSection from "../components/InfoSection";
import ITWIcon from "../components/svg/ITWIcon";
import Money from "../components/Videaste/Money";
export default function Videaste() {
  return (
    <>
      <Head>
        <title>Videaste - Présentation de métiers du numérique</title>
      </Head>
      <Layout>
        <div className="bg-white product-designer">
          <div className="p-4 md:p-8">
            <Title className="leading-none" as="h1">
              Vidéaste
            </Title>
          </div>
          <div className="space-y-8">
            <Whats />
            <Money />
            <Path />
          </div>
          <InfoSection />
        </div>
      </Layout>
    </>
  );
}
