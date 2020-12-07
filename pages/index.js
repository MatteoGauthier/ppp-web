import JobSectionA from "../components/JobSectionA";
import JobSectionB from "../components/JobSectionB";
import JobSectionC from "../components/JobSectionC";
import Layout from "../components/layout";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta name="keywords" content="PPP, MMI, DUT, DUT MMI, Mattèo Gauthier, Vanon Borget, Présentation, Product designer, Motion Designer, Vidéaste" />

        <title>Présentation de métiers du numérique - Vanon Borget & Mattèo Gauthier</title>
      </Head>
      <Layout>
        <JobSectionA />
        <JobSectionB />
        <JobSectionC />
      </Layout>
    </>
  );
}
