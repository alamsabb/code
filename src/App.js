import logo from "./logo.svg";
import "./App.css";
import Form from "./components/forms/Form";
import Displaytable from "./components/Details/Displaytable";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Link to="/">Form</Link>
        <Link to="/details">Details</Link>
      </header> */}
      <BrowserRouter>
        <nav>
          <Link to="/">Form</Link>
          <Link to="/details">Details</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/details" element={<Displaytable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
