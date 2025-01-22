// filepath: /Users/choeseung-won/LLStudy/amaewoClub/A-maewoClub/index.js
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer/footer";

const App = () => (
  <div>
    <h1>Welcome to A-maewo Club!</h1>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
