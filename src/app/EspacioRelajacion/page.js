import styles from '@/styles/relajacion.module.css'
import Image from "next/image";
import Logo from "../../../public/img/MISI-removebg-preview 1.png";

export default function EspacioRelajacionPage () {
    return (
        <div className={styles.mainContainer}>

        <Image width={300}
                src={Logo}
              />
          <form className={styles.formContainer}>
      </form>
      
              </div>
    )
}