'use client' //para que no sea procesada en el servidor
import { useState } from "react"
import styles from '@/styles/chat.module.css'
import Image from "next/image";
import Logo from "../../public/img/MISI-removebg-preview 1.png";
import logoMsg from "../../public/img/MISI.png";

export default function Chat () {
    const [prompt, setPrompt] = useState ("") //lo que el usuario escribe o pregunta
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    
  
    const generateMessage = async (prompt) => {
      setLoading(true)
      try {
        const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {           //danmas info de lo que estamos pidiendo
          'Content-Type': 'application/json'       
        },
        body: JSON.stringify({prompt}) //convertir objeto con propiedad prompt 
      })
  
      const data = await response.json() // convertir la respuesta a un json
      setResult(data);
  
    } catch (error) {
      alert(error.message);
      return;
    }
  
   setLoading(false)
  
    }
  
  const onSubmit = async (e) => { //No se reinicie la pagina cada vez que se envie el formulario
      e.preventDefault()
      generateMessage(prompt)
    }

 return (
 <div className={styles.main}>

  

 <div className={styles.chatContainer}>

  <Image width={300}
          src={Logo}
        />


    <form onSubmit={onSubmit} className={styles.formContainer} >
  

    <div className={styles.chatMessages}>
 
      {result && (
        <div className={styles.botMessage}>
          <div className={styles.botAvatar}>
            <Image
              width={65}
              height={65}
              src={logoMsg}
              alt="Misy"
            />
          </div>
          <p className={styles.botText}>
            {result}
          </p>
        </div>
      )}
</div>
      
   <div className={styles.chatUser}>

      <input
          type="text"
          name="mensaje"
          placeholder="Escriba su mensaje"
          onChange={(e) => setPrompt(e.target.value)}
          className={styles.input}
          value={prompt}
          autoFocus
        />
          
        <button type="submit" className={styles.sendButton} disabled={!prompt || loading}>
          Enviar
        </button>
          
   </div>

      </form>
      
      </div>
    </div> 
    
 )  
}