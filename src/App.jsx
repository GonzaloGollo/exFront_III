import './App.css'
import Formulario from './components/Formulario'
import Comentario from './components/Comentario'
import Titulo from './components/Titulo'


function App() {

  const descripcion= "Un simple pero bonito form para cargar usuarios";



  return (
    <>
      <Titulo titulo="Titulo Pagina"></Titulo>
      <Formulario>
        <Comentario descripcion={descripcion}></Comentario>
      </Formulario>
    </>
  )
}

export default App
