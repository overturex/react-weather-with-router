import React from 'react';
import {Link} from 'react-router';

export default class Examples extends React.Component{
  render(){
    return(
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Vancouver,CA">Vancouver, BC</Link>
          </li>
          <li>
            <Link to="/?location=San%Francisco,US">San Francisco, CA</Link>
          </li>
        </ol>
      </div>
    );
  }
}
