import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {

  return (

    <>
      <header className='cabecalho'>
        <h1>O mito Chuck Norris!</h1>
        <nav>
          <ol>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>Frases</li></Link>
            <Link to="desenvolvedores"><li>Desenvolvedores</li></Link>         
          </ol>
        </nav>
      </header>
    </>
  )
  
}