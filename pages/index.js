import JobSectionA from "../components/JobSectionA";
import JobSectionB from "../components/JobSectionB";
import JobSectionC from "../components/JobSectionC";
import Layout from "../components/layout";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="PPP, MMI, DUT, DUT MMI, Mattèo Gauthier, Vanon Borget, Présentation, Product designer, Motion Designer, Vidéaste"
        />
<meta name="author" content="Mattèo Gauthier, matteo.gauthier@gmail.com"/>
<meta name='date' content='Dec. 14, 2020'/>

        <meta property="og:title" content="Présentation de métiers du numérique - Vanon Borget & Mattèo Gauthier" />
        <meta property="og:site_name" content="Présentation de métiers du numérique" />
        <meta property="og:url" content="https://ppp-mmi.now.sh/" />
        <meta
          property="og:description"
          content="Présentation de métiers du numérique, Vanon Borget et Mattèo Gauthier allons vous présenter le métier de Product Designer, Motion Designer et Vidéaste"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image" content="/og.png" />

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
