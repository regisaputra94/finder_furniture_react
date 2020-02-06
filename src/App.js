import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import store from './store/configureStore'

import Homepage from './containers/Homepage';

class App extends React.Component {  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Homepage} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
