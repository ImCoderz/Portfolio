import './App.css'
import Contactpage from './components/Contactpage'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Projectslider from './components/Projectslider'
import Skillspage from './components/Skillspage'
import Snow from './components/Snow'
import Studiespage from './components/Studiespage'

function App() {

  return (
    <div className=' bg-bgcolor min-h-[100vh] overflow-hidden '>
      <Snow/>
      <Header/>
      <Homepage/>
      <Skillspage/>
      <Studiespage/>
      <Projectslider/>
      <Contactpage/>
    </div>
  )
}

export default App
