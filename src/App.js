import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientLogin from "./Patient/Login";
import PatientHome from "./Patient/Home";
import PatientRecipts from "./Patient/Reciept";
import PatientPermission from "./Patient/Permission/Permission";
import PatientUpload from "./Patient/Upload/UploadPage";
import LaboratoryUpload from "./Laboratory/UploadPage";
import DoctorView from './Doctor/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PatientLogin />} />
          <Route path="/home" element={<PatientHome />} />
          <Route path="/reciepts" element={<PatientRecipts />} />
          <Route path="/permissions" element={<PatientPermission />} />
          <Route path="/patient/upload" element={<PatientUpload />} />
          <Route path="/laboratory" element = {<LaboratoryUpload/>} />
          <Route path="/doctor" element = {<DoctorView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
