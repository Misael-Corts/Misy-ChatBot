import { NextResponse } from "next/server" //next respose nos permite enviar una respuesta al backend
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

if (!configuration.apiKey)
throw new Error('OPENAI_API_KEY no esta definida')

const openia = new OpenAIApi(configuration) //con esta variable podemos utilizar los multiples modelos que nos proporciona openia

export async function POST (request) {

    const body = await request.json() //metodo del post para extraer el valor
    const misy = 'Te llamas "Misy" eres un chatbot de acompañamiento emocional muy amigable'
    // que apoya a las personas que padecen ansiedad o depresión y ayuda a que no se sientan solos'
    if (!body.prompt || body.prompt.length === 0) {
        return NextResponse.error(new Error("Debes escribir un prompt"), {
          status: 400,
        });
      }

      try {
        const response = await openia.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "system", content: misy},
                     {role: "user", content: body.prompt},
                     {role: "assistant", content: 'Hola, Me llamo Misy'},
                     {role: "assistant", content: 'Espero que hoy te sientas muy bien'}

        ],
          temperature: 0.6,
          max_tokens: 50,
          top_p: 1,
          frequency_penalty: 1,
          presence_penalty: 1,
        });
    
        return NextResponse.json(response.data.choices[0].message.content);
      } catch (error) {
        return NextResponse.error(error, { status: 500 });
      }
}