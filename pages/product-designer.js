import Title from "../components/Text/Title";
import Layout from "../components/layout";
import AymericCreattion from "../components/ProductDesigner/AymericCreattion";
export default function ProductDesigner() {
  return (
    <>
      <Layout>
        <div className="bg-white">
          <div className="p-8">
            <Title className="leading-none" as="h1">
              Product Designer
            </Title>
          </div>
          <AymericCreattion />
          <div className="p-8">

     
          <div className="flex items-center justify-center px-6 py-6 space-x-5 bg-gray-500 rounded-lg">
            <div className="inline-flex flex-col items-center justify-center w-10 p-2 bg-gray-400 rounded-full">
            <img src="/images/light-bulb.png" alt=""/>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <p className="w-full text-sm text-justify text-white">
                Vanon & moi-même (Mattèo) apprécions particulièrement le domaine de l’audiovisuel et du développement
                web, c’est pourquoi nous nous sommes lancés le défi de faire un rendu sous forme d’interview vidéo et
                d’un site web regroupant les informations à propos de métiers abordés ainsi que les interviews que nous
                avons réalisé.
              </p>
              <div className="flex items-center self-end w-full space-x-2">
                <p className="flex items-center justify-center text-sm text-gray-300">Si vous souhaitez découvrir nos profils <img className="inline w-4 ml-2 align-middle" src="/images/smiling-face.png" alt=""/></p>
                <div className="flex items-center px-2 py-1 bg-white rounded justify-centers">
                  <p className="text-sm">Vanon Borget ↗ </p>
                </div>
                <div className="flex items-center justify-center px-2 py-1 bg-white rounded">
                  <p className="text-sm">Mattèo Gauthier ↗</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
