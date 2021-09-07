import React from "react";

import Exchange from "../components/Exchange";
import Features from "../components/Features";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
