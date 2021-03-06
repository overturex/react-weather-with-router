import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// load Foundation
import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

// app css
import 'style!css!sass!AppStyles';

class App extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Weather}></IndexRoute>
          <Route path="about" component={About}></Route>
          <Route path="examples" component={Examples}></Route>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App></App>, document.querySelector('#app'));
