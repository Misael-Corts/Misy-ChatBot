import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import styles from "@/styles/layout.module.css";


export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Menu />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}
