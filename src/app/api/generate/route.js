import { NextResponse } from "next/server" //next respose nos permite enviar una respuesta al backend
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

if (!configuration.apiKey)
  throw new Error('OPENAI_API_KEY no esta definida')

const openia = new OpenAIApi(configuration) //con esta variable podemos utilizar los multiples modelos que nos proporciona openia

export async function POST(request) {

  const body = await request.json() //metodo del post para extraer el valor
  const misy = 'Te llamas "Misy" eres un chatbot de acompañamiento emocional muy amigable'
  if (!body.prompt || body.prompt.length === 0) {
    return NextResponse.error(new Error("Debes escribir un prompt"), {
      status: 400,
    });
  }
  console.log('aqui el body => ', body);

  const msj = [
    { role: "assistant", content: "Estoy aquí para escucharte y apoyarte." },
    { role: "assistant", content: "¿Cómo te sientes en este momento?" },
    //empatia
    { role: "assistant", content: "Entiendo que puedas estar pasando por un momento difícil. Estoy aquí para acompañarte." },
    //preguntas abiertas
    { role: "assistant", content: "¿Puedes contarme más sobre lo que estás experimentando?" },
    //sentimientos
    { role: "assistant", content: "Es normal sentirse así a veces. Estoy aquí para escucharte y brindarte apoyo." },
    //sugerir acciones positivas
    { role: "assistant", content: "Una caminata corta al aire libre a menudo puede ayudar a aliviar el estrés. ¿Te gustaría intentarlo?" },
    //recordatorios de cuidado personal
    { role: "assistant", content: "Recuerda cuidarte a ti mismo. Practicar la autocompasión es fundamental para tu bienestar emocional." },
    // reafirmar disponibilidad
    { role: "assistant", content: "No dudes en escribirme en cualquier momento. Estoy aquí para ti." },
  ]

  // Construir los mensajes
  const messages = [{ role: "system", content: misy }];
  if (body.chatLog) {
    messages.push(...body.chatLog, ...msj); // Agregar mensajes del historial
  }
  messages.push({ role: "user", content: body.prompt });

  try {
    console.log('aqui body.chatlog =>', ...body.chatLog);
    const response = await openia.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.3,
      max_tokens: 256,
      // top_p: 1,
      // frequency_penalty: 1,
      // presence_penalty: 1,
    });
    console.log('mensajesss back', response.data.choices[0].message.content);
    return NextResponse.json(response.data.choices[0].message.content);
  } catch (error) {
    return NextResponse.error(error, { status: 500 });
  }
}