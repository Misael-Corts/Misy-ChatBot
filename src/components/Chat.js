'use client' //para que no sea procesada en el servidor
import { useState } from "react"
import styles from '@/styles/chat.module.css'


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

 
    {result && (
          <p className="text-xl font-bold text-white max-w-xs my-10">
            {result}
          </p>
        )}

      <form onSubmit={onSubmit} className={styles.formContainer} >

      <input
          type="text"
          name="mensaje"
          placeholder="Escriba su msj"
          onChange={(e) => setPrompt(e.target.value)}
          className={styles.input}
          value={prompt}
          autoFocus
        />

        <button type="submit" className={styles.sendButton} disabled={!prompt || loading}>
          Enviar
        </button>
      </form>
      
      </div>
    </div> 
 )  
}