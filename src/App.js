import React, { Component } from 'react';
import AppRouter from './Routers/AppRouter';
import Loader from './Components/Loader';
import 'normalize.css'

class App extends Component {

  state = {
    shouldRenderApp: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({shouldRenderApp: true})
    }, 2000);
  }

  render() {
    return (
      this.state.shouldRenderApp ? <AppRouter/> : <Loader/>
    )
  }
}

export default App;
