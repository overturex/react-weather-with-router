import React from 'react';

export default class WeatherForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location:''
    }
  }
  formSubmit(e){
    e.preventDefault();
    if(this.state.location){
      this.props.onSearch(this.state.location);
      this.setState({location: ''});
    }
  }
  onChange(e){
    this.setState({location: e.target.value});
  }
  render(){
    return(
      <form onSubmit={this.formSubmit.bind(this)}>
        <input type="search" onChange={this.onChange.bind(this)} value={this.state.location} placeholder="Search weather by city" />
        <button className="button hollow expanded">Get Weather</button>
      </form>
    );
  }
}
