'use client' //para que no sea procesada en el servidor
import Chat from "@/components/Chat";
import Layout from "@/components/Layout";


function HomePage () {
  return(<>
  <Layout>
     <Chat />
  </Layout>
  </>)
}

export default HomePage