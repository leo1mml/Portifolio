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
          <div className="container-component-container">
            <div className="overflow-container">
              <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
              </Switch>
            </div>
          </div>
      </div>
    </BrowserRouter>
  </div>
    
)