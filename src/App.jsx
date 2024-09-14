
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/Phrase'
import Desenvolvedores from './pages/Desenvolvedores'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={< About />}/>
        <Route path='/desenvolvedores' element={< Desenvolvedores/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
