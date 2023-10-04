'use client'
import styles from '@/styles/relajacion.module.css'
import Image from "next/image";
import Logo from "../../../public/img/MISI-removebg-preview 1.png";
import LogoEjercicio1 from "../../../public/img/espacioRelajacion2.png";
import LogoEjercicio2 from "../../../public/img/espacioRelajacion.png";
import Layout from '@/components/Layout';

export default function EspacioRelajacionPage () {
    return (
        <Layout>

      
        <div className={styles.mainContainer}>

        <Image width={300}
                src={Logo}
              />
          <div className={styles.formContainer}>
            <div className={styles.containerEjercicio1}>
                <div className={styles.ejercicio}>
                    <p className={styles.textStyle}>Ejercita tu mente 1</p>
                </div>
                <Image width={200}
                src={LogoEjercicio1}
              />
            </div>
            <div className={styles.containerEjercicio2}>
                <div className={styles.ejercicio}>
                    <p className={styles.textStyle}>Ejercita tu mente 2</p>
                </div>
                <Image width={200}
                src={LogoEjercicio2}
              />
            </div>

            </div>
      
              </div> 
     </Layout>
    )
}