import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import ManagePatient from "./pages/Admin/ManagePatient/ManagePatient";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PatientMana" element={<ManagePatient />} />
      </Routes>
    </div>
  );
}

export default App;
