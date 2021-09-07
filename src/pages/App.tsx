import React from "react";

import Exchange from "../components/Exchange";
import Features from "../components/Features";
import Header from "../components/Header";
import Ilustration from "../components/Ilustration";
import Pricing from "../components/Pricing";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Exchange />
        <Features />
        <Ilustration />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
