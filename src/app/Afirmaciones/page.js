'use client'
import { useState } from 'react'; // Importa useState

import styles from '@/styles/afirmaciones.module.css'
import Image from "next/image";
import Logo from "../../../public/img/MISI-removebg-preview 1.png";

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
  const [currentAffirmation, setCurrentAffirmation] = useState('');

  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmationsList.length);
    setCurrentAffirmation(affirmationsList[randomIndex]);
  };

  return (
    <div className={styles.mainContainer}>
      <Image width={300} src={Logo} />

      <form className={styles.formContainer}>
        <h1>Afirmación Diaria </h1>
        <p>{currentAffirmation}</p>
        <button type="button" onClick={getRandomAffirmation}>
          Generar Afirmación
        </button>
      </form>
    </div>
  );
}

