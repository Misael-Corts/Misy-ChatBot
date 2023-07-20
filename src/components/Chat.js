'use client' //para que no sea procesada en el servidor
import { useState } from "react"
import styles from '@/styles/chat.module.css'
import Link from 'next/link'


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

      <form onSubmit={onSubmit} className={styles.container} >

      <input
          type="text"
          name="mensaje"
          placeholder="Escriba su msj"
          onChange={(e) => setPrompt(e.target.value)}
          className="p-2 rounded-md block bg-neutral-700 text-white w-full"
          value={prompt}
          autoFocus
        />

        <button type="submit" className="bg-green-500 p-2 rounded-md block mt-2 disabled:opacity-50 text-white" disabled={!prompt || loading}>
          Enviar
        </button>

        {result && (
          <p className="text-xl font-bold text-white max-w-xs my-10">
            {result}
          </p>
        )}
      </form>

 <Link href='/Afirmaciones'>Go to afirmaciones</Link>
 <Link href='/DiarioGratitud'>Go to DiarioGratitud</Link>
 <Link href='/EspacioRelajacion'>Go to EspacioRelajacion</Link>
 <Link href='/RegistroEmocional'>Go to Registro Emocional</Link>


    </div> 
 )  
}