import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

import Header from "./components/Header/Header"
import ManageUser from "./pages/Admin/ManageUser/ManageUser";
import RegisterF0 from "./pages/Patient/RegisterF0/RegisterF0";
import UpdateHealth from "./pages/Patient/UpdateHealth/UpdateHealth"
import PatientList from "./pages/Doctor/PatientList"
import DoctorListPage from "./pages/Patient/DoctorListPage"


function App() {
  return (
    <div className="App">
      <Header role="ADMIN"/>
      <Routes>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserMana" element={<ManageUser />} />
        <Route path="/RegisterF0" element={<RegisterF0 />} />
        <Route path="/UpdateHealth" element={<UpdateHealth />} />
        <Route path="/PatientList" element={<PatientList />} />
        <Route path="/DoctorList" element={<DoctorListPage />} />

      </Routes>
    </div>
  );
}

export default App;
