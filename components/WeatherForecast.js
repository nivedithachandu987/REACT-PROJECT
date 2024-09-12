import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const apiKey = '9d52826a055bd68b64f1e2f009b45a9d'; // Replace with your actual API key

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setCity(''); // Clear the input field after search
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const temperatureUnit = unit === 'metric' ? '°C' : '°F';

  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return '🌞';
      case 'few clouds':
        return '🌤️';
      case 'scattered clouds':
        return '⛅';
      case 'broken clouds':
        return '☁️';
      case 'shower rain':
        return '🌧️';
      case 'rain':
        return '🌦️';
      case 'thunderstorm':
        return '⛈️';
      case 'snow':
        return '❄️';
      case 'mist':
        return '🌫️';
      default:
        return '🌈';
    }
  };

  const cardStyle = {
    marginTop: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    margin: 'auto',
    background: 'linear-gradient(135deg, #f3935c, #f5576c)', // Gradient with multiple colors
    color: 'white', // Ensure text is visible on the gradient background
    border: '1px solid rgba(0, 0, 0, 0.1)', // Light black border
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer', // Add cursor pointer to indicate it's interactable
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      marginTop: '20px',
      background: 'linear-gradient(135deg,#81f6e8, #57cff0, #63becc, #23a3b2)', // Multi-shade background
      padding: '20px',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: 'black' }}>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white' }}>
          Get Weather
        </button>
        <div style={{ marginTop: '10px' }}>
          <label style={{ color: '#fff' }}>
            <input
              type="radio"
              value="metric"
              checked={unit === 'metric'}
              onChange={handleUnitChange}
            />
            Celsius
          </label>
          <label style={{ marginLeft: '10px', color: '#fff' }}>
            <input
              type="radio"
              value="imperial"
              checked={unit === 'imperial'}
              onChange={handleUnitChange}
            />
            Fahrenheit
          </label>
        </div>
      </form>

      {loading && <p style={{ color: '#fff' }}>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div
          style={cardStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseOver={(e) => e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow}
          onMouseOut={(e) => e.currentTarget.style.boxShadow = cardStyle.boxShadow}
        >
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <div style={{ fontSize: '50px' }}>
            {getWeatherIcon(weatherData.weather[0].description)}
          </div>
          <p style={{ fontSize: '40px' }}>{weatherData.main.temp}{temperatureUnit}</p>
          <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;

