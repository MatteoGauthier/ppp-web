import Title from "../components/Text/Title";
import Layout from "../components/layout";
import BenjaminCreation from "../components/MotionDesigner/BenjaminCreation";
import Head from "next/head";
import Whats from "../components/MotionDesigner/Whats";
import Path from "../components/MotionDesigner/Path";
import ITW from "../components/MotionDesigner/ITW";
import InfoSection from "../components/InfoSection";
export default function MotionDesigner() {
  return (
    <>
      <Head>
        <title>Motion Designer - Présentation de métiers du numérique</title>
      </Head>
      <Layout>
        <div className="bg-white product-designer">
          <div className="p-8">
            <Title className="leading-none" as="h1">
              Motion Designer
            </Title>
          </div>

          <div className="space-y-8">
            <Whats />
            <Path />
            <ITW />
            <BenjaminCreation />
          </div>
          <InfoSection />
        </div>
      </Layout>
    </>
  );
}
