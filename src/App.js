import React, { Component } from 'react';
import AppRouter from './Routers/AppRouter';
import configureStore from './Store/ConfigureStore'
import { Provider } from 'react-redux';
import 'normalize.css'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider> 
    );
  }
}

export default App;
