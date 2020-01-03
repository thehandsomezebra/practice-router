import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//app components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      {/* using exact forces the path to be exactly that... otherwise, it may stack */}

      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <About title="About" />} />
      <Route path="/teachers" render={() => <Teachers />} />
      <Route path="/courses" render={() => <Courses />} />
    </div>
  </BrowserRouter>
);

export default App;
