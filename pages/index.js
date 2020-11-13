
import JobSectionA from "../components/JobSectionA";
import JobSectionB from "../components/JobSectionB";
import JobSectionC from "../components/JobSectionC";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <>
      <Layout>
        <JobSectionA />
        <JobSectionB />
        <JobSectionC />
      </Layout>
    </>
  );
}
