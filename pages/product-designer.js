import Title from "../components/Text/Title";
import Layout from "../components/layout";
import AymericCreation from "../components/ProductDesigner/AymericCreation";
import Head from "next/head";
import Whats from "../components/ProductDesigner/Whats";
import Path from "../components/ProductDesigner/Path";
import ITW from "../components/ProductDesigner/ITW";
import InfoSection from "../components/InfoSection";
export default function ProductDesigner() {
  return (
    <>
      <Head>
        <title>Product Designer - Présentation de métiers du numérique</title>
      </Head>
      <Layout>
        <div className="bg-white product-designer">
          <div className="p-8">
            <Title className="leading-none" as="h1">
              Product Designer
            </Title>
          </div>
          <div className="space-y-8">
            <Whats />
            <Path />
            <ITW />
            <AymericCreation />
          </div>
          <InfoSection/>
        </div>
      </Layout>
    </>
  );
}
