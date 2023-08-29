import styles from "@/styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
    <div className={styles.footerLefth}>
    Copyright © 2023 Misy ChatBot.
    </div>
    <div className={styles.footerRight}>
    <FaTwitter className={styles.icon}/>
    <FaFacebook className={styles.icon}/>
    <FaInstagram className={styles.icon}/>
    </div>
  
</footer>
   );
}
