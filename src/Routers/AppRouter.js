import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../Containers/LandingPage'
import NavBar from '../Components/NavBar'

export default () => (
  <div className="app-container">
    <BrowserRouter>
      <div>
        <header>
          <NavBar/>
        </header> 
          <div>
            <Switch>
              <Route path="/" component={LandingPage} exact={true}/>
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  </div>
    
)