import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Footer,
  Header,
  Hero,
  New,
  Options,
  Products,
  Sale,
  Show,
  Subscription,
} from "../src/components/index";

function App() {
  return (
    <div className="App">
      <Footer />
      <Header />
      <Hero />
      <New />
      <Options />
      <Products />
      <Sale />
      <Show />
      <Subscription />
    </div>
  );
}

export default App;
