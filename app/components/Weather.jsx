import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMapService from 'OpenWeatherMapService';

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: 'Miami',
      temp: '88'
    }
  }
  handleSearch(location){
    OpenWeatherMapService.getTemp(location)
      .then(function(temp){
        this.setState({location: location, temp: temp});
      }.bind(this), function(err){
        console.log(err);
      });
  }
  render(){
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch.bind(this)}></WeatherForm>
        <WeatherMessage location={this.state.location} temp={this.state.temp}></WeatherMessage>
      </div>
    );
  }
}
