import styles from '@/styles/diario.module.css'
import Image from "next/image";
import Logo from "../../../public/img/MISI-removebg-preview 1.png";
import Layout from '@/components/Layout';

export default function DiarioGratitudPage () {
    return (
        <Layout>

      
        <div className={styles.mainContainer}>

        <Image width={300}
                src={Logo}
              />
          <form className={styles.formContainer}>
      </form>
      
              </div>
         </Layout>       
    )
}