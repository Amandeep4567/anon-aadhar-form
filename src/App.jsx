import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormPage from "./components/Form";
import AnonPage from "./components/AnonPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/anon-aadhar-verification" element={<AnonPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
