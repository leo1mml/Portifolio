import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../Containers/LandingPage'
import AboutMe from '../Containers/AboutMe'
import Jobs from '../Containers/Jobs'
import NavBar from '../Components/NavBar'

export default () => (
  <div className="app-container">
    <BrowserRouter>
      <div>
        <NavBar/>
          <Switch>
            <Route path="/" component={LandingPage} exact={true}/>
            <Route path="/about" component={AboutMe}/>
            <Route path="/jobs" component={Jobs}/>
          </Switch>
      </div>
    </BrowserRouter>
  </div>
    
)