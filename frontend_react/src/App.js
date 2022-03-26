import React from "react";

import {
  About,
  Footer,
  Header,
  Navbar,
  Skills,
  Testimonial,
  Projects,
} from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
