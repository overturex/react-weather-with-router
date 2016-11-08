import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component{
  onSearch(e){
    e.preventDefault();
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
                <input type="search" placeholder="Search weather" />
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
