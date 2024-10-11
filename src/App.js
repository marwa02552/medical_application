import About from "./pages/about/about.jsx";
import Dashboard from "./pages/admin/dashbord/dashboard.jsx";
import AddDoctor from "./pages/admin/doctors/addDoctor.jsx";
import Contact from "./pages/contact/contact.jsx";
import Detail from "./pages/doctors/docDetail/detail.jsx";
import Doctors from "./pages/doctors/doctors.jsx";
import Home from "./pages/home/home.jsx";
import DoctorList from './pages/admin/doctors/doctors.jsx'
import 'primereact/resources/themes/saga-blue/theme.css';   // Theme
import 'primereact/resources/primereact.min.css';           // Core styles
import 'primeicons/primeicons.css';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Appointments from "./pages/admin/appointments/appointments.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/detail/:id' element={<Detail/>}/>
   

        <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
        <Route path='/admin/doctors' element={<DoctorList/>}></Route>
        <Route path='/admin/addDoctor' element={<AddDoctor/>}></Route>
        <Route path='/admin/appointments' element={<Appointments/>}></Route>


      </Routes>
    </Router>
    
  );
}

export default App;
