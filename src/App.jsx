
import { ScrollProvider } from './components/ScrollContext.jsx';
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import Header from './components/Header'
import Hero from './components/Hero.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import Category from './components/Category.jsx'
import BlackSection from './components/BlackSection.jsx'
import Gallery from './components/Gallery.jsx';
import Proposal from './components/Proposal.jsx';
import Footer from "./components/Footer.jsx"



function App() {


  return (
    <>
      
      <Hero/>
      <HeroBanner/>

      <ScrollProvider>
        <Header />
        <Category/>
        <BlackSection />
        <Gallery/>
      </ScrollProvider>
     <Proposal/>
    
    </>
  )
}

export default App
