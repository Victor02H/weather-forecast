import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import weatherApi from './services/weatherApi';
import CityCard from './components/CityCard';
import apiKey from './config/apiKey.json';

import './App.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [weatherCards, setWeatherCards] = useState([]);

  function searchCity(e) {
    e.preventDefault();

    weatherApi.get(`?q=${inputValue}&units=metric&appid=${apiKey.key}`)
      .then(res => {

        if (weatherCards.length <= 3) {
          toast.success('Success!');
          setWeatherCards([...weatherCards, res.data]);

          return;
        }

        toast.info('Reached the maximum!');
      })
      .catch(err => {
        toast.error('Error!');
        console.log(err);
      })

    return;
  }

  function resetWeatherCards() {
    setWeatherCards([]);

    toast.info('All cards removed!');

    return;
  }

  return (
    <div className="App">
      <h1>Simple Weather App</h1>

      <form>
        <div className='search-container'>
          <input
            type='text'
            name='search-city'
            autoComplete='off'
            placeholder='Search city'
            onChange={(e) => setInputValue(e.target.value)}
          />

          <input
            type='submit'
            name='submit'
            value='Submit'
            onClick={(e) => searchCity(e)}
          />
        </div>

        <input
          type='button'
          name='reset'
          value='Reset'
          onClick={() => resetWeatherCards()}
        />
      </form>

      <div className='align-city-cards'>
        {
          weatherCards.map((item, index) => {
            return (
              <CityCard
                key={index}
                cityName={item.name}
                cardName={weatherCards}
                countryName={item.sys.country}
                weatherDescription={item.weather[0].description}
                temp={item.main}
                weather={item.weather[0].main}
                timezone={item.timezone}
              />
            );
          })
        }
      </div>


      <ToastContainer
        position='top-right'
        theme='colored'
      />
    </div>
  );
}

export default App;
