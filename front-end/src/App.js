import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

import Header from "./components/Header/Header"
import ManagePatient from "./pages/Admin/ManagePatient/ManagePatient";
import ManageDoctor from "./pages/Admin/ManageDoctor/ManageDoctor"
import RegisterF0 from "./pages/Patient/RegisterF0/RegisterF0";
import UpdateHealth from "./pages/Patient/UpdateHealth/UpdateHealth"
import PatientDetail from "./pages/Doctor/PatientDetail"
import PatientList from "./pages/Doctor/PatientList"



function App() {
  return (
    <div className="App">
      <Header role="ADMIN"/>
      <Routes>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PatientMana" element={<ManagePatient />} />
        <Route path="/DoctorMana" element={<ManageDoctor />} />
        <Route path="/RegisterF0" element={<RegisterF0 />} />
        <Route path="/UpdateHealth" element={<UpdateHealth />} />
        <Route path="/PatientDetail" element={<PatientDetail />} />
        <Route path="/PatientList" element={<PatientList />} />
      </Routes>
    </div>
  );
}

export default App;
