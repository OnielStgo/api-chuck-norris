

Criar um projeto React com Vite
  npm create vite@latest . --template react

  escolher:
    Ingnorar arquivos
    React
    Javascipt

  Executar:
    npm install
    npm run dev


Agora:
  apagar todo o conteudo de App.css
  apagar tudo o conteudo do Index.css
  no App.jsx tiro tudo o que está dentro do return das função


na pasta src:
  criar as pastas:
    components
    pages

na pasta pages:
  crio as pastas:
    Home
    About
    ApiRickAndMorty


na pasta componets:
  crio as pastas:
    Header
    Footer



executar:
  npm i react-router-dom


no main.jsx
  importar o BrowserRouter


no app.jsx
  adicionar as rotas para accesar às páginas que estão dentro das pasta "pages", e colocar também o Header e Footer que estão dentro da pasta "components", ficará assim o return app.jsx:

   return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={< About />}/>
        <Route path='/rick-and-morty' element={< ApiRickAndMorty/>}/>
      </Routes>
      <Footer />
    </>
  )



Agora criamos o componente header

  return (

    <>
      <header className='cabecalho'>
        <h1>Universo Rick and Morty</h1>
        <nav>
          <ol>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>Sobre</li></Link>
            <Link to="rick-and-morty"><li>Personagens</li></Link>         
          </ol>
        </nav>
      </header>
    </>
  )


Agora devemos estiliar o Header


Deois estiliar o footer


Adicionar conteudo do App.css



Agora devemos criar as pages

  criamos a page Home
  criamos a page About
  criamos a page ApiRickAndMorty





















































https://rickandmortyapi.com/api/character



{
id: 1,
name: "Rick Sanchez",
status: "Alive",
species: "Human",
type: "",
gender: "Male",
origin: {
name: "Earth (C-137)",
url: "https://rickandmortyapi.com/api/location/1"
},
location: {
name: "Citadel of Ricks",
url: "https://rickandmortyapi.com/api/location/3"
},
image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
episode: [
"https://rickandmortyapi.com/api/episode/1",
"https://rickandmortyapi.com/api/episode/2",
"https://rickandmortyapi.com/api/episode/3",
"https://rickandmortyapi.com/api/episode/4",
"https://rickandmortyapi.com/api/episode/5",
"https://rickandmortyapi.com/api/episode/6",
"https://rickandmortyapi.com/api/episode/7",
"https://rickandmortyapi.com/api/episode/8",
"https://rickandmortyapi.com/api/episode/9",
"https://rickandmortyapi.com/api/episode/10",
"https://rickandmortyapi.com/api/episode/11",
"https://rickandmortyapi.com/api/episode/12",
"https://rickandmortyapi.com/api/episode/13",
"https://rickandmortyapi.com/api/episode/14",
"https://rickandmortyapi.com/api/episode/15",
"https://rickandmortyapi.com/api/episode/16",
"https://rickandmortyapi.com/api/episode/17",
"https://rickandmortyapi.com/api/episode/18",
"https://rickandmortyapi.com/api/episode/19",
"https://rickandmortyapi.com/api/episode/20",
"https://rickandmortyapi.com/api/episode/21",
"https://rickandmortyapi.com/api/episode/22",
"https://rickandmortyapi.com/api/episode/23",
"https://rickandmortyapi.com/api/episode/24",
"https://rickandmortyapi.com/api/episode/25",
"https://rickandmortyapi.com/api/episode/26",
"https://rickandmortyapi.com/api/episode/27",
"https://rickandmortyapi.com/api/episode/28",
"https://rickandmortyapi.com/api/episode/29",
"https://rickandmortyapi.com/api/episode/30",
"https://rickandmortyapi.com/api/episode/31",
"https://rickandmortyapi.com/api/episode/32",
"https://rickandmortyapi.com/api/episode/33",
"https://rickandmortyapi.com/api/episode/34",
"https://rickandmortyapi.com/api/episode/35",
"https://rickandmortyapi.com/api/episode/36",
"https://rickandmortyapi.com/api/episode/37",
"https://rickandmortyapi.com/api/episode/38",
"https://rickandmortyapi.com/api/episode/39",
"https://rickandmortyapi.com/api/episode/40",
"https://rickandmortyapi.com/api/episode/41",
"https://rickandmortyapi.com/api/episode/42",
"https://rickandmortyapi.com/api/episode/43",
"https://rickandmortyapi.com/api/episode/44",
"https://rickandmortyapi.com/api/episode/45",
"https://rickandmortyapi.com/api/episode/46",
"https://rickandmortyapi.com/api/episode/47",
"https://rickandmortyapi.com/api/episode/48",
"https://rickandmortyapi.com/api/episode/49",
"https://rickandmortyapi.com/api/episode/50",
"https://rickandmortyapi.com/api/episode/51"
],
url: "https://rickandmortyapi.com/api/character/1",
created: "2017-11-04T18:48:46.250Z"
},
{
id: 2,
name: "Morty Smith",
status: "Alive",
species: "Human",
type: "",
gender: "Male",
origin: {
name: "unknown",
url: ""
},
location: {
name: "Citadel of Ricks",
url: "https://rickandmortyapi.com/api/location/3"
},
image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
episode: [
"https://rickandmortyapi.com/api/episode/1",
"https://rickandmortyapi.com/api/episode/2",
"https://rickandmortyapi.com/api/episode/3",
"https://rickandmortyapi.com/api/episode/4",
"https://rickandmortyapi.com/api/episode/5",
"https://rickandmortyapi.com/api/episode/6",
"https://rickandmortyapi.com/api/episode/7",
"https://rickandmortyapi.com/api/episode/8",
"https://rickandmortyapi.com/api/episode/9",
"https://rickandmortyapi.com/api/episode/10",
"https://rickandmortyapi.com/api/episode/11",
"https://rickandmortyapi.com/api/episode/12",
"https://rickandmortyapi.com/api/episode/13",
"https://rickandmortyapi.com/api/episode/14",
"https://rickandmortyapi.com/api/episode/15",
"https://rickandmortyapi.com/api/episode/16",
"https://rickandmortyapi.com/api/episode/17",
"https://rickandmortyapi.com/api/episode/18",
"https://rickandmortyapi.com/api/episode/19",
"https://rickandmortyapi.com/api/episode/20",
"https://rickandmortyapi.com/api/episode/21",
"https://rickandmortyapi.com/api/episode/22",
"https://rickandmortyapi.com/api/episode/23",
"https://rickandmortyapi.com/api/episode/24",
"https://rickandmortyapi.com/api/episode/25",
"https://rickandmortyapi.com/api/episode/26",
"https://rickandmortyapi.com/api/episode/27",
"https://rickandmortyapi.com/api/episode/28",
"https://rickandmortyapi.com/api/episode/29",
"https://rickandmortyapi.com/api/episode/30",
"https://rickandmortyapi.com/api/episode/31",
"https://rickandmortyapi.com/api/episode/32",
"https://rickandmortyapi.com/api/episode/33",
"https://rickandmortyapi.com/api/episode/34",
"https://rickandmortyapi.com/api/episode/35",
"https://rickandmortyapi.com/api/episode/36",
"https://rickandmortyapi.com/api/episode/37",
"https://rickandmortyapi.com/api/episode/38",
"https://rickandmortyapi.com/api/episode/39",
"https://rickandmortyapi.com/api/episode/40",
"https://rickandmortyapi.com/api/episode/41",
"https://rickandmortyapi.com/api/episode/42",
"https://rickandmortyapi.com/api/episode/43",
"https://rickandmortyapi.com/api/episode/44",
"https://rickandmortyapi.com/api/episode/45",
"https://rickandmortyapi.com/api/episode/46",
"https://rickandmortyapi.com/api/episode/47",
"https://rickandmortyapi.com/api/episode/48",
"https://rickandmortyapi.com/api/episode/49",
"https://rickandmortyapi.com/api/episode/50",
"https://rickandmortyapi.com/api/episode/51"
],
url: "https://rickandmortyapi.com/api/character/2",
created: "2017-11-04T18:50:21.651Z"
}








