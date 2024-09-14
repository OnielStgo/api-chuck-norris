import { useState } from 'react'
import './styles.css'

export default function About() {


  const [conteudo, setConteudo] = useState(<div className='box-cards'></div>)

  async function getPhrase() {

    const reqOptions = {
      method: "GET",
      redirect: "follow",
    }

    const response = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev", 
      reqOptions
    )

    if (!response.ok) {
      throw new Error('Http Error')
    }

    const apiresponse = await response.json()

    const phrase =  apiresponse.value
    return phrase
  }

  async function buildCards() {
    const phrase = await getPhrase()
    console.log(phrase)
    setConteudo(phrase)
  }

  return (

    <>
      <div className='phrase-page'>
        <h1>Para ver uma frase aleatória, clique no botão</h1>
        <button onClick={buildCards}>Ver frase</button>
        <div className='phrase'>{conteudo}</div>
      </div>
    </>
  )
  
}