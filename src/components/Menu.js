import Link from "next/link";
import styles from "@/styles/menu.module.css";
import Image from "next/image";
import Logo from "../../public/img/MISI.png";

export default function Menu() {
  return (
    <nav className={styles.navBarContainer}>
      <Link href="/">
        <Image
          src={Logo}
          width={120}
          height={50}
          className={styles.imageLogo}
        />
      </Link>

      <Link href="/RegistroEmocional">
        <button className={styles.btnNavBar}>Registro Emocional</button>
      </Link>

      <Link href="/Afirmaciones">
        <button className={styles.btnNavBar}>Afirmaciones</button>
      </Link>

      <Link href="/EspacioRelajacion">
        <button className={styles.btnNavBar}>Espacio Relajacion</button>
      </Link>

      <Link href="/DiarioGratitud">
        <button className={styles.btnNavBar}>Diario Gratitud</button>
      </Link>

    </nav>
  );
}
