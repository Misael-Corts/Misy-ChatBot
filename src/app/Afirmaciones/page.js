'use client'
import { useState } from 'react'; // Importa useState
import styles from '@/styles/afirmaciones.module.css'
import Image from "next/image";
import Logo from "../../../public/img/MISI-removebg-preview 1.png";
import Layout from '@/components/Layout';
import afirmationLogo from "../../../public/img/Afirmacion_hoy.png";


const affirmationsList = [
  "Hoy será un día increíble.",
  "Estoy rodeado de amor y alegría.",
  "Soy capaz de superar cualquier desafío que se presente.",
  "Tengo el poder de crear mi propio éxito.",
  "Mis sueños y metas son alcanzables.",
  "Estoy en paz conmigo mismo y con el mundo.",
  "Mi felicidad depende de mí mismo.",
  "Soy un imán para la positividad y la buena energía."
];

export default function AfirmacionesPage () {
  const ramdomAffimation = Math.floor(Math.random() * affirmationsList.length)
  const [currentAffirmation, setCurrentAffirmation] = useState(affirmationsList[ramdomAffimation]);

  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmationsList.length);
    setCurrentAffirmation(affirmationsList[randomIndex]);
  };

  return (
<Layout> 
    <div className={styles.mainContainer}>
      <Image width={300} src={Logo} />

      <form className={styles.formContainer}>

        <div className={styles.containerAffirmations}>
          <p className={styles.affirmationText}>"{currentAffirmation}"</p>
           <Image width={200} src={afirmationLogo} />

        </div>


        <button className={styles.btnGenerate} type="button" onClick={getRandomAffirmation}>
          Generar Afirmación
        </button>
      </form>
    </div>
    </Layout>
  );
}

