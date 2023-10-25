"use client"
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import styles from "@/styles/layout.module.css";
import { useEffect } from 'react'



export default function Layout({ children }) {


  useEffect(() => {
    if(typeof window !== "undefined"){
      require('bootstrap/dist/js/bootstrap.min.js')
    }
  },[])

  return (
    <div className={styles.layout}>
      <Menu />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}
