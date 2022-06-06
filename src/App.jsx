import axios from 'axios'
import {useEffect, useState} from 'react'
import './App.css'



function App() {
const [latLon, setLatLon] = useState()
const [weather, setWeather] = useState()
 


useEffect(() => {
  const success = pos => {
  const lat = pos.coords.latitude
  const lon = pos.coords.longitude
  setLatLon ({lat, lon})
  }
  navigator.geolocation.getCurrentPosition (success)
}, [])




useEffect(() => {
  if (latLon !== undefined){
    const API_KEY = '1a2405b63cc81010267e5404a1f9ef9f'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`
    
    axios.get(url)
      .then(res => setWeather(res.data))
      .catch(err => (err))
  }
}, [latLon])

const bottonWeather = () => {
  const farengeith = weather?.main.temp
  const button =()=> {if(weather===farengeith){
    setWeather((weather?.main.temp - 273.15).toFixed(1))
  }
     else{  setWeather(farengeith)}
  }
}


const hour= new Date().getHours()
const minute= new Date().getMinutes()
const seconds= new Date().getSeconds()

const month = new Date().getDate()
const year = new Date().getFullYear()

return (
    <div className="App">
      
      <div className='App_card'> 

        <div className='App_title'>
          <h1>Weather App</h1>
        </div>
          <div className='card_container'> 
          <i class='bx bxs-cloud-lightning' ></i>
            <div>
              <h1>{weather?.name} {weather?.sys.country}</h1>
              <h1><i class='bx bx-cloud' ></i> <b>Clouds: </b>{weather?.clouds.all}</h1>
              <h1><i class='bx bxs-hourglass-bottom'></i> <b>Temperature: </b>{(weather?.main.temp -273.15).toFixed(1)}°C</h1>
              <h1><i class='bx bx-timer'></i> <b>Velocity: </b>{weather?.wind.speed}</h1>
            </div>
          </div> 
        <div className='card_btn'>
            <button className='card_btn2' onClick={bottonWeather}>Change °F/°C </button>
        </div>
        <h1 className='App_date'> {hour}:{minute}:{seconds}  -  {month}/{year} </h1>
      </div>
      
      
    </div>
  )
}

export default App 
