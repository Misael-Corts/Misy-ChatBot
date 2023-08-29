import styles from '@/styles/diario.module.css'
import Image from "next/image";
import Logo from "../../../public/img/MISI-removebg-preview 1.png";

export default function DiarioGratitudPage () {
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