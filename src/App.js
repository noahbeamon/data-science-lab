import React from 'react'
import './App.css';
//import * as ReactBootstrap from "react-bootstrap"; 
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Resources from "./Components/Resources";
import Projects from "./Components/Projects";
import Publications from "./Components/Publications";
import Personnel from "./Components/Personnel";
import Faqs from "./Components/Faqs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; 

//projects
import Allofus from "./Components/Projects/Allofus"; 
import Wastewater from "./Components/Projects/Wastewater"; 

//personnel
import HemanShakeri from "./Components/Personnel/HemanShakeri"; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
      <Router>
      <Navbar />
        <Switch>
          {/*Projects*/}
          <Route path="/Wastewater" component={Wastewater}>
            <Wastewater />
          </Route>
          <Route path="/Allofus" component={Allofus}>
            <Allofus />
          </Route>
          {/*Personnel*/}
          <Route path="/HemanShakeri" component={HemanShakeri}>
            <HemanShakeri />
          </Route>
          {/*Tabs*/}
          <Route path="/Faq" component={Faqs}>
            <Faqs />
          </Route>
          <Route path="/Researchersandassistants" component={Personnel}>
            <Personnel />
          </Route>
          <Route path="/Publications" component={Publications}>
            <Publications />
          </Route>
          <Route path="/Projects" component={Projects}>
            <Projects />
          </Route>
          <Route path="/Resources" component={Resources}>
            <Resources />
          </Route>
          <Route path="/Blog" component={Blog}>
            <Blog />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
    <Footer />
     </div>
  );
}

export default App;