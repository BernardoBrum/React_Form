import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./pages/Form/Form";
import Sucess from "./pages/Sucess/Sucess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/sucess" element={<Sucess />} />
      </Routes>
    </Router>
  );
}

export default App;
