import './App.css'
import Contactpage from './components/Contactpage'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Projectslider from './components/Projectslider'
import Skillspage from './components/Skillspage'
import Snow from './components/Snow'
import Studiespage from './components/Studiespage'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className=' bg-bgcolor min-h-[100vh] w-screen overflow-hidden'>
      <Snow/>
      <Header/>
      <Homepage/>
      <Skillspage/>
      <Studiespage/>
      <Projectslider/>
      {/* <Contactpage/> */}
      <Footer/>
    </div>
  )
}

export default App
