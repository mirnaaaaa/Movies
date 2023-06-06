import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cards } from "./Components/Cards";
import { Details } from "./Components/Details";
import { ShowsContextProvider } from "./showsContext";

function App() {
  return (
    <ShowsContextProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/details/:name" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </ShowsContextProvider>
  );
}

export default App;
