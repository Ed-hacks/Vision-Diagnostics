import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Card from './Cards.jsx'
import Imgcard from './Imgcard.jsx'
import './assets/hero.png'
import './App.css'

function App(){

    return(
    <>
      <Header/>
      <Hero/>
      <div className='hero-cards'>
        <Card num='1' name='Patient Portal Access' desc='Secure online results'/>
        <Card num='2' name='Comprehensive Test Menu' desc='Wide range of diagnostics'/>
        <Card num='3' name='Contact us' desc='Multiple convenient contact platforms'/>
      </div>
      <div className="services">
        <p id='services'>Our Services</p>
        <div className="imgcards">
          <Imgcard className='imgcard' img='./src/assets/Blood-sample.png' alt='hero img' desc='Routine Blood Tests'/>
          <Imgcard className='imgcard' img='./src/assets/Genetic-test.png' alt='hero img' desc='Genetic Testing'/>
          <Imgcard className='imgcard' img='./src/assets/Coronavirus.png' alt='hero img' desc='COVID-19 Testing'/>
          <Imgcard className='imgcard' img='./src/assets/Wellness.png' alt='hero img' desc='Wellness Panels'/>
          <Imgcard className='imgcard' img='./src/assets/Xray.png' alt='hero img' desc='Imaging Services'/>
        </div>
      </div>
    </>
  )
}

export default App