import axios from 'axios';
import { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import '../App.css';


function Home() {
  const locations = require('../city.list.min.json')
  const [cities, setCities] = useState([])
  const [city, setCity] = useState()
  const [weather, setWeather] = useState({})

  useEffect(() => {
    locations.map(l => {
      l.description = `${l.name.toUpperCase()}${l.state ? `, ${l.state}` : ''}, ${l.country}`;
      return l;
    });
  }, []);

  //api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
  //api : badbf993c9f31b057c55846d85715c81

  // useEffect(() => {
  //   if (city) {
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&appid=badbf993c9f31b057c55846d85715c81`)
  //       .then(response => response.json())
  //       .then(result => {
  //         setWeather({
  //           temperature: result.main.temp,
  //           description: result.weather[0].description,
  //           icon: result.weather[0].icon,
  //           main: result.weather[0].main,
  //           humidity : result.main.humidity,
  //           name: result.name
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   }
  // }, [city])

  const getWeatherData = (city) => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?id=${city.id}&units=metric&appid=badbf993c9f31b057c55846d85715c81`
    })
      .then((response) => {
        console.log(response);
        setWeather({
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          main: response.data.weather[0].main,
          humidity: response.data.main.humidity,
          name: response.data.name
        })
      })
      .catch((error) => {
        // console.log(error);
      })
  }

  return (
    <div className="App">
      {/* <div className='Header'>
        {new Date().toLocaleDateString()}
        <br />
        {city} Weather
        <br />
        {Math.round(temperature * 100) / 100} ℃
        <br />
        {desc}
      </div> */}
      <div className='Form'>
        <span className='CurrDate'>
          Today Weather Report : {new Date().toLocaleDateString()}
        </span>
        <br />
        <Autocomplete
          id="search-cities"
          options={cities}
          onSelect={e => {
            const value = e.target.value.toUpperCase();
            if (value.length >= 2) {
              const possibleLocations = locations.filter(l => l.description.includes(value))
                .slice(0, 15);
              setCities(possibleLocations.map(l => l.description));
              const selected = locations.find(ac => ac.description === value);
              setCity(selected);
            }
          }}
          renderInput={(params) => <TextField {...params}
            label="Search" variant="outlined"
          />}
        />
        <button id='btn-search' onClick={() => {
          getWeatherData(city)
        }}>
          GET WEATHER
        </button>
        {/* <div className='button_cont' align="center">
          <a id="btn-search" href="add-website-here" target="_blank" rel="nofollow">
          <span>GET WEATHER</span> </a>
        </div> */}
      </div>
      {typeof weather.main != 'undefined' ? (
        <div>
          <div hidden={!weather.temperature} className='Descibe'>
            <div className='general'
              style={{ color: weather.temperature <= 0 ? 'purple' : 'orangered' }}>
              <div className='name-city'>{weather.name} Weather <br /></div>
              <div className='temp'>{weather.temperature}&#176;C</div>
              <div className='status'>{weather.main} <br /></div>
            </div>
            <hr />
            <div className='detail'>
              <div className='description'>{weather.description}</div>
              <br />
              <img alt='weather icon' src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} />
              <br />
              <div className='humidity'>Humidity: {weather.humidity}%</div>
            </div>
          </div>
        </div>
      ) : ('Please Enter name of City ...')}
      {weather.cod === '404' ? (
        <p>City not found</p>
      ) : (<></>)}
    </div>
  );
}

export default Home;
