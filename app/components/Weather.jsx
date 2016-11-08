import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMapService from 'OpenWeatherMapService';

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: 'Miami',
      temp: '88',
      isLoading: false
    }
  }
  handleSearch(location){
    this.setState({isLoading: true});
    OpenWeatherMapService.getTemp(location)
      .then(function(temp){
        this.setState({location: location, temp: temp, isLoading: false});
      }.bind(this), function(err){
        this.setState({isLoading: false});
        console.log(err);
      });
  }
  render(){

    var renderMessage = function(){
      if(this.state.isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      }
      else{
        return <WeatherMessage location={this.state.location} temp={this.state.temp}></WeatherMessage>
      }
    }.bind(this);

    return(
      <div>
        <h1 className="text-center">Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}></WeatherForm>
        {renderMessage()}
      </div>
    );
  }
}
