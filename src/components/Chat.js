'use client' //para que no sea procesada en el servidor
import { useState } from "react"
import styles from '@/styles/chat.module.css'
import Image from "next/image";
import Logo from "../../public/img/MISI-removebg-preview 1.png";
import user from "../../public/img/userInvitado.png";
import logoMsg from "../../public/img/MISI.png";
import TypingAnimation from "./TypingAnimation";

export default function Chat() {
  const [prompt, setPrompt] = useState("") //lo que el usuario escribe o pregunta
  const [result, setResult] = useState();
  const [chatLog, setChatLog] = useState([])
  const [loading, setLoading] = useState(false);


  const generateMessage = async (prompt) => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {           //danmas info de lo que estamos pidiendo
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt, chatLog }) //convertir objeto con propiedad prompt 
      })
      const data = await response.json() // convertir la respuesta a un json
      setResult(data);
      setChatLog((prevChatLog) => [...prevChatLog, { role: "assistant", content: data }])
    } catch (error) {
      alert(error.message);
      return;
    }
    setLoading(false)
  }

  const onSubmit = async (e) => { //No se reinicie la pagina cada vez que se envie el formulario
    e.preventDefault()
    setChatLog((prevChatLog) => [...prevChatLog, { role: 'user', content: prompt }]);
    generateMessage(prompt);
    setPrompt('');
  }

  console.log('aquie chatlog => ', chatLog);

  return (
    <div className={styles.chatContainer}>
      <Image width={300}
        src={Logo}
        alt="Misy"
      />
      <div className={styles.prueba}>
        <div className={styles.chatMessages}>
          {result && (
            <div>
              {
                chatLog.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'assistant' ? 'flex-row items-center mt-3 mb-3' : 'flex-row-reverse items-center mt-3'
                    }`}>
                    <div className={`${message.role === 'assistant' ? 'rounded-full overflow-hidden mr-2' : 'rounded-full overflow-hidden ml-2'}`}>
                      <Image
                        width={50}
                        height={50}
                        src={message.role === 'assistant' ? logoMsg : user}
                        alt="Misy"
                      />
                    </div>
                    <p className={styles.botText}>
                      {/* {loading && message.type === 'bot' ? '...' : message.message} */}
                      {message.content}
                    </p>
                  </div>
                ))
              }
              {
                loading &&
                <div key={chatLog.length} className="flex justify-start">
                  <div className={'rounded-full overflow-hidden mr-2'}>
                    <Image
                      width={50}
                      height={50}
                      src={logoMsg}
                      alt="Misy"
                    />
                  </div>
                  <div className={styles.botText}>
                    <TypingAnimation />
                  </div>
                </div>
              }
            </div>
          )}
        </div>
        <form onSubmit={onSubmit} className={styles.formContainer} >
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