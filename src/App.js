import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./pages/Form/Form";
import Success from "./pages/Success/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
