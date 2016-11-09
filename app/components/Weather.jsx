import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMapService from 'OpenWeatherMapService';
import ErrorModal from 'ErrorModal';

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: '',
      temp: '',
      isLoading: false,
      errorMessage: ''
    }
  }
  handleSearch(location){
    this.setState({location: '', temp: '', isLoading: true, errorMessage:''});
    OpenWeatherMapService.getTemp(location)
      .then(function(temp){
        this.setState({location: location, temp: temp, isLoading: false});
      }.bind(this), function(err){
        this.setState({isLoading: false, errorMessage: err});
      }.bind(this));
  }
  componentDidMount(){
    var location = this.props.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash = '#/'
    }
  }
  componentWillReceiveProps(newProps){
    var location = newProps.location.query.location;
    if(location && location.length>0){
      this.handleSearch(location);
      window.location.hash = '#/'
    }
  }
  render(){
    
    var renderMessage = function(){
      if(this.state.isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      }
      else if(this.state.location && this.state.temp){
        return <WeatherMessage location={this.state.location} temp={this.state.temp}></WeatherMessage>
      }
    }.bind(this);

    var renderError = function(){
      if(this.state.errorMessage){
        return <ErrorModal message={this.state.errorMessage}></ErrorModal>
      }
    }.bind(this);

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}></WeatherForm>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
