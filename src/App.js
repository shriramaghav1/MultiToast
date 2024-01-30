import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstComp from "./component/FirstComp";
import Navbar from "./component/Navbar";
import SecondComp from "./component/SecondComp"
import ThirdComp from "./component/ThirdComp"
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstComp count={count} setCount={setCount} />} />
        <Route path="/secondComp" element={<SecondComp  count={count} setCount={setCount} />} />
        <Route path="/thirdComp" element={<ThirdComp />} />

        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
