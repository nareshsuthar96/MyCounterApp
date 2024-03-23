import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WeatherApp = () => {
    const [data ,setData]= useState([])
    const [cityName, setCityName]= useState()

    function getWeatherapi(city){
        const apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61077e5ad002d732ba425bf99dcabdf8`

                axios.get(apiurl).then((res)=>{
                    // console.log(res)
                     setData(res.data)
                }).catch((err)=>{
                    console.log(err)
                })
}       

    useEffect(()=>{
        getWeatherapi("")
    },[])

    function handleSearch(){
        getWeatherapi(cityName)
    }
  return (
    <div>
      <div className="container" id='Weather'>
        <div className="row" >
            <div className="col-md-4"></div>
            <div className="col-md-4" >
            
            <div className="card" style={{Width: "18rem;"}}>
            
            <input className="form-control me-2 mt-2 mb-2" type="search" placeholder="Enter Your City" value={cityName} onChange={(e)=>{setCityName(e.target.value)}}/>
            <button className="btn btn-outline-success mt-2 mb-2" type="submit" onClick={handleSearch}>Search</button>
            
            <img src="media/pexels-johannes-plenio-1118873.jpg" className="card-img-top" id='img' alt="img"/>
            <div className="card-body">
            <h5 className="card-title" id='aa'>My Weather App</h5>
            <h4 className='data'>My City :-{data?.name}</h4>
            <h4 className='data'>My Temp :-{((data?.main?.temp)-273.15).toFixed(2)}</h4>
      
            </div>
            </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
    </div>
  )
}

export default WeatherApp
