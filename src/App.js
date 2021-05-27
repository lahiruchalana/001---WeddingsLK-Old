import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header.js"
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route>
            <Header/> {/* set user authentication using
       Disney video of clever programmer part (before 50 min) */}
            <Home/>
            <Footer/>        
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
