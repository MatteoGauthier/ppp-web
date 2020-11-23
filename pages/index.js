import JobSectionA from "../components/JobSectionA";
import JobSectionB from "../components/JobSectionB";
import JobSectionC from "../components/JobSectionC";
import Layout from "../components/layout";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Product Designer - Présentation de métiers du numérique</title>
      </Head>
      <Layout>
        <JobSectionA />
        <JobSectionB />
        <JobSectionC />
      </Layout>
    </>
  );
}
