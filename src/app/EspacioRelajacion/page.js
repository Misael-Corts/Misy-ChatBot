'use client'
import styles from '@/styles/relajacion.module.css'
import Image from "next/image";
import Logo from "../../../public/img/MISI-removebg-preview 1.png";
import LogoEjercicio1 from "../../../public/img/espacioRelajacion2.png";
import LogoEjercicio2 from "../../../public/img/espacioRelajacion.png";
import LogoEjercicio3 from "../../../public/img/espacioRelajacion3.png";
import calma from "../../../public/img/calmaAnsiedad.png";
import panico from "../../../public/img/tecnica5sentidos.jpg";
import Layout from '@/components/Layout';
import { FaRegTimesCircle } from "react-icons/fa";
import Modal from '@/components/Modal';
import ReactPlayer from 'react-player/youtube'

export default function EspacioRelajacionPage() {

  const relajaTuMente = [
    {
      title: `1. Colorear`,
      text: "Colorear ya no es solo una actividad de niños, y es que, en los últimos años, hemos visto cómo las librerías empezaban a vender cada vez más y más libros de colorear para adultos. Este simple ejercicio ayuda a distraer la mente de las presiones diarias de la vida y aporta muchos beneficios: desconectar de la tecnología, aumentará los pensamientos positivos y te adentrará hacia un estado meditativo.",
    },
    {
      title: '2. Hacer estiramientos y practicar deporte',
      text: "La actividad física aumenta la frecuencia cardíaca, incluso con tan solo un poco de ejercicio. Al ejercitar se activan neurotransmisores que ayudan a mejorar el estado de ánimo y combatir la ansiedad y el estrés.\n\nOtra actividad física de relajación son los estiramientos, estos ayudan a destensar los músculos y a aliviar la ansiedad.",
    },
    {
      title: '3. Hacer puzles',
      text: "Si te cuesta mucho trabajo entrar en un estado de meditación, ¡prueba con los puzles! Esta puede ser una actividad meditativa en donde te darás cuenta de que en pocos minutos estarás tan concentrado en la tarea que habrás alcanzado el objetivo de estar presente, tranquilo y relajado.",
    },
    {
      title: '4. Meditar',
      text: "Un ejercicio antiestrés muy útil para el día a día es la meditación. Entrenar la mente a entrar en un estado de calma y serenidad interior te aportará muchos beneficios: combate el estrés, aumenta la autoestima, desarrolla la creatividad y evita el insomnio.",
    },
    {
      title: '5. Manualidades',
      text: "Utilizar las manos para crear cosas hacen de las manualidades una actividad muy beneficiosa para combatir el estrés, mejorar el estado de ánimo y entrar en un estado de concentración mental. Hay algo muy satisfactorio en saber que estás haciendo algo productivo, sin plazos de entrega y para ti mismo.",
    },
    {
      title: '6. Ordenar',
      text: "“Casa ordenada, mente ordenada” es un dicho popular, pero también es muy cierto. Dedicar tiempo a ordenar el espacio de trabajo, organizar armarios o limpiar la casa, mejora la salud mental y, por esta razón, es una actividad que te ayudará a aliviar el estrés diario.",
    },
    {
      title: '7. Música relajante',
      text: "La música es uno de los mejores regalos de la vida, así que prueba con música relajante para combatir los momentos de estrés. Para relajarte escuchando música, simplemente siéntete cómodo, busca un lugar tranquilo y sin distracciones... tan solo hay que cerrar los ojos, centrarse en la respiración y dejarse llevar por el agradable sonido.",
    },
    {
      title: '8. Conectar con la naturaleza',
      text: "Estar en contacto con la naturaleza, o incluso pasar tiempo con tu mascota, reduce la ira, el miedo, el estrés y aumenta los pensamientos positivos. La exposición a la naturaleza no solo te hará sentir mejor emocionalmente, sino que contribuye al bienestar físico, reduce la presión arterial, la tensión muscular y la producción de hormonas del estrés.",
    },
    {
      title: '9. Ir a un spa',
      text: "Seguramente ya conozcas esa sensación de felicidad al salir de un spa. Esta actividad tan relajante hace que te pongas de muy buen humor y tiene una gran cantidad de beneficios físicos y psicológicos.",
    },
    {
      title: '10. Escuchar las olas del mar',
      text: "Sin duda, el mar y el sonido de sus olas relajan a todo el mundo. El mar previene el insomnio, reduce el estrés y los síntomas depresivos. El sonido armónico, predecible, suave y de intervalos regulares que tienen las olas del mar puede ser muy terapéutico para los humanos. Este ayuda a disminuir la ansiedad, normalizar la presión arterial y tratar el nerviosismo.",
    },
  ];

  const relajaAnsiedad = [{
    title: `1. Ejercicios de respiración equitativa`,
    text: "Este sencillo ejercicio es uno de los más efectivos para reducir la ansiedad. Consiste en respirar utilizando una frecuencia «equitativa» de 4 segundos: inhalas por la nariz durante 4 segundos y exhalas por la boca durante otros 4 segundos. Repite este ciclo al menos tres veces, aunque puedes hacerlo cuantas veces quieras. Con el tiempo, es posible que logres contener la respiración durante el doble de tiempo, tal como lo hacen aquellas personas que practican disciplinas que involucran controlar la respiración, como el yoga o la meditación.",
  },
  {
    title: `2. Ejercicios de respiración abdominal`,
    text: "La respiración diafragmática es otra técnica de relajación que utiliza la respiración profunda para aliviar la ansiedad. Para realizar esta técnica, adopta una posición cómoda, ya que la práctica dura unos cuantos minutos. Luego, coloca una mano sobre el pecho y otra a la altura del estómago. Inhala profundamente durante 3 a 5 segundos y siente cómo los pulmones y el estómago se llenan de aire. Exhala durante otros 3 a 5 segundos. El resultado debería ser una respiración lenta, profunda y uniforme. Repite el ciclo durante varios minutos.",
  },
  {
    title: `3. Tiempo de calidad con la familia y los amigos`,
    text: "Compartir tiempo con nuestros seres queridos puede ser otro buen remedio para aliviar el estrés y ayudar a eliminar los pensamientos negativos. Según diversos estudios, pasar tiempo con los amigos y la familia rebaja los niveles de ansiedad al mismo nivel que lo hacen, por ejemplo, la actividad física y tener una alimentación saludable.",
  },
  {
    title: `4. Rutina de ejercicios a largo plazo `,
    text: "Realizar ejercicio físico tiene incontables beneficios para la salud. A nivel físico, por ejemplo, ayuda a reducir el riesgo de padecer enfermedades cardiovasculares o presión arterial alta, además de ayudarnos a bajar de peso. A nivel psicológico, mejora el estado de ánimo y reduce el riesgo de padecer estrés, ansiedad y depresión. Elige una actividad física que te guste y practícala con regularidad para notar sus beneficios. Puedes realizar ejercicios cardio como correr, nadar, tomar clases de baile, subir escaleras, andar en bicicleta, etc. Sin embargo, no solo el ejercicio aeróbico va a ayudarte, actividades como el yoga o el tai chi pueden ser igual de efectivas.",
  },
  {
    title: `5. Alimentación adecuada`,
    text: "Lo que comemos tiene un impacto directo en nuestra salud, ya que afecta a nuestras hormonas, determina nuestros niveles de energía, impacta en nuestro sistema inmunitario, etc. Llevar una alimentación saludable tiene, al igual que el ejercicio físico, muchísimos beneficios: mejora el estado de ánimo y el rendimiento del cerebro, reduce el estrés y la ansiedad, protege el corazón y fortalece los huesos, entre otros.",
  },
  {
    title: `6. Suplementos y remedios naturales `,
    text: "Además de llevar un estilo de vida saludable, mediante una buena alimentación y la realización de actividad física, existen algunos suplementos que pueden ayudar a reducir el estrés y la ansiedad. Ellos son: Té verde, Ashwagandha, Vitamina D",
  },
  {
    title: `7. Técnicas de relajación como la visualización`,
    text: "Además de la respiración profunda y el ejercicio, la visualización puede ser una buena técnica de relajación para aliviar la ansiedad. La visualización consiste, tal como su nombre lo sugiere, en crear imágenes mentales de cierta situación o lugar. Para ello, se recomienda cerrar los ojos, recostarse en un lugar cómodo, aflojar la ropa y los zapatos y concentrarse en la respiración. A través de la visualización (que puedes hacer con ayuda de audios o vídeos de guía) vas a incorporar en esa imagen mental que estás creando todos los sentidos: gusto, olfato, vista, tacto. La visualización ayuda a relajarnos y a conectarnos con el momento presente.",
  },
  {
    title: `8. Música relajante`,
    text: "Al momento de lidiar con el malestar emocional o de ayudar a aliviar los síntomas durante un ataque de ansiedad, la música relajante puede ser una gran aliada para encontrar la calma y recuperar el equilibrio interior. Escuchar música relajante libera hormonas relacionadas con el bienestar, como la serotonina. Esta, a su vez, actúa como un analgésico que ayuda a calmar molestias físicas, así como a aliviar tensiones y preocupaciones.",
  },
  {
    title: `9. Aromaterapia`,
    text: "El uso de ciertos aromas puede favorecer nuestra sensación de bienestar y aliviar los síntomas de ansiedad. La aromaterapia consiste en utilizar fragancias provenientes de aceites esenciales, velas, inciensos, etc., para actuar sobre el estado de ánimo. Entre los aromas relajantes más comunes se encuentran la lavanda, la manzanilla, el jazmín y la rosa.",
  },
  {
    title: `10. Reír`,
    text: "La risa forma parte del lenguaje universal del ser humano. El propio Sigmund Freud decía que la risa es fundamental para descargar emociones y liberar energías negativas. Reír es un gran antidepresivo: hace que nuestro organismo se oxigene, segrega endorfinas, mejora la función cerebral y reduce el estrés, regula la presión sanguínea y reduce la sensación de dolor, entre muchos otros beneficios. Pon una película graciosa, reúnete con tus seres queridos, lee noticias positivas… Favorece cualquier actividad que te saque una sonrisa.",
  },

  ];

  const ataquePanico = [
    {
      title: `1. Usa la respiración profunda`,
      text: `Concéntrate en inhalar y exhalar por la boca, sintiendo cómo el aire llena lentamente tu pecho y abdomen, y luego expúlsalo lentamente. Inhala contando hasta cuatro, mantén el aire por un segundo y luego exhala contando hasta cuatro.`
    },
    {
      title: `2. Cierra los ojos`,
      text: `Algunos ataques de pánico provienen de factores desencadenantes que te abruman. Si te encuentras en un entorno acelerado con muchos estímulos, esto puede provocar que sufras uno.
      Para reducir los estímulos, cierra los ojos durante el ataque de pánico. Esto puede bloquear cualquier estímulo adicional y hacer que sea más fácil concentrarte en tu respiración.`
    },
    {
      title: `3. Practica la conciencia plena Mindfulness`,
      text: `La conciencia plena puede ayudarte a conectarte con la realidad que te rodea. Dado que los ataques de pánico pueden causar un sentimiento de desapego o separación de la realidad, esto puede combatir un ataque de pánico a medida que se acerca o cuando realmente ocurre.
      Concéntrate en las sensaciones físicas con las que estás familiarizado, como hundir los pies en el suelo o sentir la textura de tus jeans en las manos. Estas sensaciones específicas te ubican firmemente en la realidad y te dan un objetivo en el cual concentrarte.`
    },
    {
      title: `4. Encuentra un objeto de enfoque`,
      text: `Algunas personas encuentran útil enfocarse en un solo objeto durante un ataque de pánico. Elije un objeto a la vista y ve con atención cada uno de sus detalles.
      Por ejemplo, es posible que notes que la manecilla del reloj se sacude cuando hace tic-tac y que está ligeramente ladeada. Descríbete a ti mismo los patrones, el color, las formas y el tamaño del objeto. Concentra toda tu energía en este objeto, y los síntomas de pánico podrían disminuir.`
    },
    {
      title: `5. Utiliza técnicas de relajación muscular`,
      text: `Relaja conscientemente un músculo a la vez, comenzando con algo simple como los dedos de tu mano y haz lo mismo en otras partes de tu cuerpo.`
    },
    {
      title: `6. Imagina tu lugar feliz`,
      text: `Imagínate en ese lugar, y trata de concentrarte en los detalles tanto como sea posible. Imagínate hundiendo los dedos de los pies en la arena cálida, o sintiendo el olor intenso de los pinos.
      Este lugar debe ser tranquilo, calmado y relajante, sin calles de New York o Hong Kong, sin importar cuánto ames a las ciudades en la vida real.`
    },
    {
      title: `8. Haz ejercicios ligeros`,
      text: `Las endorfinas mantienen el bombeo de sangre exactamente como debe ser. Puede ayudar a inundar nuestro cuerpo con endorfinas, que pueden mejorar nuestro estado de ánimo. Debido a que te sientes estresado, elige un ejercicio ligero que sea suave para el cuerpo, como caminar o nadar.`
    },
    {
      title: `9. Mantén lavanda a mano`,
      text: `La lavanda es conocida por ser calmante y aliviar el estrés. Puede ayudar a que tu cuerpo se relaje. Si sabes que eres susceptible a sufrir ataques de pánico, ten a mano un poco de aceite esencial de lavanda y ponte un poco en los antebrazos cuando sufras uno. Inhala el olor.`
    },
    {
      title: `10. La técnica de los 5 sentidos`,
      text: `En esta técnica utilizamos nuestros sentidos para ayudarnos a situarnos en el momento presente, dejando de lado las emociones y pensamientos negativos. Consiste en elegir a través de los sentidos: `,
    },
  ]

  const modalInfo = [{
    modalTitle: 'Aqui tienes 10 actividades que ayudan a relajar la mente',
    buttonEjercicio: 'Relaja tu mente',
    ejercicios: relajaTuMente,
    image: LogoEjercicio1,
    video_url: "https://www.youtube.com/watch?v=jItvR_X3NME"
  },
  {
    modalTitle: 'Aqui tienes 10 ejercicios para calmar la ansiedad',
    buttonEjercicio: 'Calma tu ansiedad',
    ejercicios: relajaAnsiedad,
    image: LogoEjercicio2,
    // imagenEjercicio: calma,
    video_url: `https://www.youtube.com/watch?v=qd9lmvDkJOQ`
  },
  {
    modalTitle: 'Aqui tienes 10 maneras de detener un ataque de pánico',
    buttonEjercicio: 'Combate los ataques de pánico',
    ejercicios: ataquePanico,
    image: LogoEjercicio3,
    // imagenEjercicio: panico,
    video_url: `https://www.youtube.com/watch?v=NHBqkLlujiE`
  }
  ]

  return (
    <Layout>
      <div className={styles.mainContainer}>

        <Image width={300}
          src={Logo}
        />
        <div className={styles.formContainer}>

          {modalInfo.map((element, index) => (
            <div className={styles.containerEjercicio} key={index} >
              <button type="button" className={styles.ejercicio} data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
                <p className={styles.textStyle}>
                  {element.buttonEjercicio}
                </p>
              </button>

              <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${index}`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id={`exampleModalLabel${index}`}>{element.modalTitle}</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"><FaRegTimesCircle /></button>
                    </div>
                    <div className="modal-body">
                      <Modal ejerciciosModal={element.ejercicios} />
                      {element.imagenEjercicio ? <div className={styles.imagenContainer}><Image width={500} src={element.imagenEjercicio} /></div> : null}
                      {element.video_url ? <div className={styles.videoContainer}><ReactPlayer url={element.video_url}/></div> : null}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className={styles.closeButton} data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>

              <Image width={150}
                src={element.image} key={index}
              />

            </div>
          ))}








          {/* <div className={styles.containerEjercicio}>
          <button type="button" className={styles.ejercicio} data-bs-toggle="modal" data-bs-target="#exampleModal">
          <p className={styles.textStyle}>
            Relaja tu mente
          </p>
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Aqui tienes 10 actividades que ayudan a relajar la mente.</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <div className="modal-body">
                  <b>1. Colorear</b>
                  <p>Colorear ya no es solo una actividad de niños, y es que, en los últimos años, hemos visto cómo las librerías empezaban a vender cada vez más y más libros de colorear para adultos. Este simple ejercicio ayuda a distraer la mente de las presiones diarias de la vida y aporta muchos beneficios: desconectar de la tecnología, aumentará los pensamientos positivos y te adentrará hacia un estado meditativo.</p>
                  <br />
                  <b>2. Colasdasorear</b>
                  <p>Colorear ya no es solo una actividad de niños, y es que, en los últimos años, hemos visto cómo las librerías empezaban a vender cada vez más y más libros de colorear para adultos. Este simple ejercicio ayuda a distraer la mente de las presiones diarias de la vida y aporta muchos beneficios: desconectar de la tecnología, aumentará los pensamientos positivos y te adentrará hacia un estado meditativo.</p>
                  <br />   
                  <b>3. Coloreasdsadar</b>
                  <p>Colorear ya no es solo una actividad de niños, y es que, en los últimos años, hemos visto cómo las librerías empezaban a vender cada vez más y más libros de colorear para adultos. Este simple ejercicio ayuda a distraer la mente de las presiones diarias de la vida y aporta muchos beneficios: desconectar de la tecnología, aumentará los pensamientos positivos y te adentrará hacia un estado meditativo.</p>
                  <br />      
              </div>
              <div className="modal-footer">
                <button type="button" className={styles.closeButton} data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

        <Image width={150}
                src={LogoEjercicio1}
              />  
        </div>

        <div className={styles.containerEjercicio}>
          <button type="button" className={styles.ejercicio} data-bs-toggle="modal" data-bs-target="#exampleModal2">
          <p className={styles.textStyle}>
            Calma tu ansiedad
          </p>
        </button>

        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel2">Aqui tienes 10 ejercicios para calmar la ansiedad.</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <div className="modal-body">
              <b>1. Co12312312312lorear</b>
                  <p>Colorear ya no es solo una actividad de niños, y es que, en los últimos años, hemos visto cómo las librerías empezaban a vender cada vez más y más libros de colorear para adultos. Este simple ejercicio ayuda a distraer la mente de las presiones diarias de la vida y aporta muchos beneficios: desconectar de la tecnología, aumentará los pensamientos positivos y te adentrará hacia un estado meditativo.</p>
                  <br />
                  <b>2. Cola312312312sdasorear</b>
                  <p>Colorear ya no es solo una actividad de niños, y es que, en los últimos años, hemos visto cómo las librerías empezaban a vender cada vez más y más libros de colorear para adultos. Este simple ejercicio ayuda a distraer la mente de las presiones diarias de la vida y aporta muchos beneficios: desconectar de la tecnología, aumentará los pensamientos positivos y te adentrará hacia un estado meditativo.</p>
                  <br />   
                  <b>3. Colo123123123123reasdsadar</b>
                  <p>Colorear ya no es solo una actividad de niños, y es que, en los últimos años, hemos visto cómo las librerías empezaban a vender cada vez más y más libros de colorear para adultos. Este simple ejercicio ayuda a distraer la mente de las presiones diarias de la vida y aporta muchos beneficios: desconectar de la tecnología, aumentará los pensamientos positivos y te adentrará hacia un estado meditativo.</p>
                  <br />   
              </div>
              <div className="modal-footer">
                <button type="button" className={styles.closeButton} data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>

        <Image width={150}
                src={LogoEjercicio1}
              />  
        </div> */}


          {/* <div className={styles.containerEjercicio}>
            <Modal title={'relaja la mente pibssse'} modalTitle={'10 excersie pa la midasdasdasdn'} text={modalInfo2}/>
                <Image width={150}
                src={LogoEjercicio1}
              />
            </div>

            <div className={styles.containerEjercicio}>
            <Modal title={'Conten el estressss'} modalTitle={'10 excersie pa la estres'} text={modalInfo2}/>
                <Image width={150}
                src={LogoEjercicio2}
              />
            </div> */}


        </div>

      </div>
    </Layout>
  )
}