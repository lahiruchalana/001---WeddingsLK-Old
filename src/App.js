import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Header from "./Header.js"
import Footer from './Footer.js'
import Home from './Home/Home.js'

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route>
            <Header/>
            <Home/>
            <Footer/>        
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
