import React, { Component } from 'react';
import AppRouter from './Routers/AppRouter';
import Loader from './Components/Loader';
import 'normalize.css'

class App extends Component {

  state = {
    shouldRenderApp: false
  }

  componentDidMount() {
    window.addEventListener("load", () =>{
      this.setState({shouldRenderApp: true})
    })
  }

  render() {
    return (
      this.state.shouldRenderApp ? <AppRouter/> : <Loader/>
    )
  }
}

export default App;
