import './App.css'
import Arrivals from './components/arrivals/Arrivals'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import LightLayers from './components/light-layers/LightLayers'
import Nav from './components/nav/Nav'

function App() {

  return (
    <>
      <Banner/>
      <Nav/>
      <Hero/>
      <Arrivals/>
      <LightLayers/>
      <Arrivals variant='for him'/>
      <Hero variant='la pradina'/>
      <Footer/>
    </>
  )
}

export default App
