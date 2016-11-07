import React from 'react';

export default class WeatherMessage extends React.Component{
  render(){
    return(
      <h3>It is {this.props.temp} in {this.props.location}</h3>
    );
  }
}
