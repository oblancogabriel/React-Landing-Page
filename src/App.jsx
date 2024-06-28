import NavBar from "./components/NavBar/NavBar"
import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero"
import Categorias from "./components/Categorias/Categorias"
import CardsProductos from "./components/Productos/CardsProductos"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <NavBar/>  
      <Layout>
        <Hero/>
        <Categorias/>
        <CardsProductos/>
      </Layout>
      <Footer/>
      
    </>
  )
}

export default App
