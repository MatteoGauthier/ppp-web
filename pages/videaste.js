import Title from "../components/Text/Title";
import Layout from "../components/layout";
import Head from "next/head";
import Whats from "../components/ProductDesigner/Whats";
import Path from "../components/ProductDesigner/Path";
import ITW from "../components/ProductDesigner/ITW";
import InfoSection from "../components/InfoSection";
import ITWIcon from "../components/svg/ITWIcon";
export default function ProductDesigner() {
  return (
    <>
      <Head>
        <title>Videaste - Présentation de métiers du numérique</title>
      </Head>
      <Layout>
        <div className="bg-white product-designer">
          <div className="p-8">
            <Title className="leading-none" as="h1">
              Videaste <ITWIcon/>
            </Title>
          </div>
          <div className="space-y-8">
            <Whats />
            <Path />
          </div>
          <InfoSection />
        </div>
      </Layout>
    </>
  );
}
