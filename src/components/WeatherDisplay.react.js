import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.css";

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      incorrectData: false
    };
  }

  componentDidMount() {
    const name = this.props.name;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=
      ${name}
      &appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`;
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json, incorrectData: false });
  }).catch(err => this.setState({ incorrectData: true }));
  }

  render() {
      if (this.state.incorrectData) return (
          <div className="alert alert-danger">
            <strong>Attention!</strong> Incorrect data entered. Please, try again.
          </div>
      );
      const weatherData = this.state.weatherData;
      if (!weatherData) return <div>Loading</div>;
      const weather = weatherData.weather[0];
      const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
      return (
        <div>
          <h1>
            {weather.main} in {weatherData.name}
            <img src={iconUrl} alt={weatherData.description} />
          </h1>
          <p>Current: {Math.round((weatherData.main.temp - 32) / 1.8)}°</p>
          <p>High: {Math.round((weatherData.main.temp_max - 32) / 1.8)}°</p>
          <p>Low: {Math.round((weatherData.main.temp_min - 32) / 1.8)}°</p>
          <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
        </div>
      );
  }
}
export default WeatherDisplay;
