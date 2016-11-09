import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: ''
    }
  }
  onChange(e){
    this.setState({location: e.target.value});
  }
  onSearch(e){
    e.preventDefault();
    var location = this.state.location;
    if(location){
      var encodedLocation = encodeURIComponent(location);
      this.setState({location: ''});
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  }
  render(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">R</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className="menu">
              <li>
                <input type="search" onChange={this.onChange.bind(this)} value={this.state.location} placeholder="Search weather by city" />
              </li>
              <li>
                <button type="button" className="button">Get Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

// var old = (
//   <div>
//     <h2>Nav Component</h2>
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
//     <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
//     <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
//   </div>
// );
