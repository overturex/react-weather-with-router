import React from 'react';
import Nav from './Nav';

export default class Main extends React.Component{
  render(){
    return(
      <div>
        <Nav></Nav>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
}
