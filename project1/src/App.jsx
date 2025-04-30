import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComponent from "./components/Form/FormComponent";
import DataTable from "./components/Dashboard/DataTable";
import Navbar from "./components/Navbar/Navbar";
// import DataTable from "./components/Dashboard/DataTable";

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/dashboard" element={<DataTable/>} />
      </Routes>
    </Router>
  );
}

export default App;