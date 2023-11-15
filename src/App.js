import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountCreation from "../src/components/AccountCreation";
import UserDetails from "../src/components/UserDetails";
import InformationForm from "./components/InformationForm";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccountCreation />} />
        <Route path="/user" element={<UserDetails />} />
        <Route path="/Information" element={<InformationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
