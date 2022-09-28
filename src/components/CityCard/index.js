import { BsCloudFog2Fill } from 'react-icons/bs';
import { FaCloud, FaMoon, FaSun, FaCloudShowersHeavy, FaSnowflake } from 'react-icons/fa';

import './cityCard.css';
import '../../responsive.css';

export default function CityCard(props) {
  function Icon() {
    if (props.timezone < 0 && props.weather === 'Clear') {
      return (
        <FaSun />
      );
    }

    if (props.timezone > 0 && props.weather === 'Clear') {
      return (
        <FaMoon />
      );
    }

    if (props.weather === 'Rain') {
      return (
        <FaCloudShowersHeavy />
      );
    }

    if (props.weather === 'Clouds') {
      return (
        <FaCloud />
      );
    }

    if (props.weather === 'Snow') {
      return (
        <FaSnowflake />
      );
    }

    if (props.weather === 'Fog' || 'Mist') {
      return (
        <BsCloudFog2Fill />
      );
    }
  }

  return (
    <div className='card-container'>
      <div className='card-header'>
        <div className='city-informations'>
          <span className='card-name'>{props.cityName}</span>
          <span className='card-country'>{props.countryName}</span>
        </div>
      </div>
      <div className='card-main'>
        <div className='city-temp-container'>
          <span className='city-temp'>{Math.floor(props.temp.temp)}&deg;</span>
          <span className='max-temp'>max {Math.floor(props.temp.temp_max)}&deg;</span>
          <span className='min-temp'> / min {Math.floor(props.temp.temp_min)}&deg;</span>
        </div>
        <span className='card-icon'>{Icon()}</span>
      </div>
      <div className='card-footer'>
        <span>{props.weatherDescription}</span>
      </div>
    </div>
  );
}
