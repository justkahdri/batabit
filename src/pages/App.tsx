import React from "react";

import Exchange from "../components/Exchange";
import Features from "../components/Features";
import Header from "../components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Exchange />
        <Features />
      </main>
    </div>
  );
}

export default App;
