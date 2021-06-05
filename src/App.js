import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header.js"
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import About from "./Components/About.js"
import Galleries from "./Components/Galleries.js"
import SearchResults from "./Components/SearchResults.js"
import Services from "./Components/Services.js"
import UserLogin from "./Components/UserLogin.js"
import UserProfile from "./Components/UserProfile.js"
import UserSignup from "./Components/UserSignup.js"
import Vendors from "./Components/Vendors.js"
import WeddingPlans from "./Components/WeddingPlans.js"
import AdminLogin from "./Components/AdminLogin.js"
import EmployeeLogin from "./Components/EmployeeLogin.js"
import SideBarUser from "./Components/SideBarUser.js";
import AdminProfile from "./Components/AdminProfile";
import EmployeeProfile from "./Components/EmployeeProfile";
import SideBarEmployee from "./Components/SideBarEmployee";
import SideBarAdmin from "./Components/SideBarAdmin";
import HeaderAdmin from "./Components/HeaderAdmin";
import HeaderEmployee from "./Components/HeaderEmployee";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <Header/> 
            <About/>
            <Footer/>        
          </Route>
          <Route path="/Galleries">
            <Header/> 
            <Galleries/>
            <Footer/>        
          </Route>
          <Route path="/search/results">
            <Header/> 
            <SearchResults/>
            <Footer/>        
          </Route>
          <Route path="/services">
            <Header/> 
            <Services/>
            <Footer/>        
          </Route>
          <Route path="/user/login">
            <Header/> 
            <UserLogin/>
            <Footer/>        
          </Route>
          <Route path="/user/profile">
            <SideBarUser />
            <Header/>
            <UserProfile/> 
          </Route>
          <Route path="/user/signup">
            <Header/> 
            <UserSignup/>
            <Footer/>        
          </Route>
          <Route path="/vendors">
            <Header/> 
            <Vendors/>
            <Footer/>        
          </Route>
          <Route path="/wedding/plans">
            <Header/> 
            <WeddingPlans/>
            <Footer/>        
          </Route>
          <Route path="/admin/profile">
            <SideBarAdmin/>
            <HeaderAdmin/>
            <AdminProfile/>    
          </Route>
          <Route path="/admin/login">
            <Header/> 
            <AdminLogin/>
            <Footer/>        
          </Route>
          <Route path="/employee/profile">
            <SideBarEmployee/>
            <HeaderEmployee/>
            <EmployeeProfile/>     
          </Route>
          <Route path="/employee/login">
            <Header/> 
            <EmployeeLogin/>
            <Footer/>        
          </Route>
        </Switch>
        <Route exact path="/">
            <Header /> 
            <Home />
            <Footer />        
          </Route>
      </div>
    </Router>
    
  );
}

export default App;
