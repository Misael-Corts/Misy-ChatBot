import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import GratitudeBox from '@/components/GratitudeBox';
import styles from '@/styles/diario.module.css'; // Importar los estilos desde diario.module.css

const DiarioGratitudPage = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}> {/* Usar el estilo desde diario.module.css */}
        <Image
          src="/img/MISI-removebg-preview 1.png"
          alt="Logo"
          width={300}
          height={150}
        />
        <GratitudeBox />
      </div>
    </Layout>
  );
};

export default DiarioGratitudPage;
