import Title from '../components/Text/Title'
import Layout from "../components/layout";
import AymericCreattion from '../components/ProductDesigner/AymericCreattion'
export default function ProductDesigner() {
  return (
    <>
      <Layout>
        <div className="bg-white">
            <div className="p-8">
                <Title className="leading-none" as="h1">Product Designer</Title>
            </div>
          <AymericCreattion/>
        </div>
      </Layout>
    </>
  );
}
