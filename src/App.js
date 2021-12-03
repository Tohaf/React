
import { Routes, Route, Outlet } from "react-router";

import CancelData from "./pages/delete";
import DesForm from './pages/destination';
import RegisterData from './pages/get';
import LocationData from './pages/location';
import LocForm from './pages/status';
import WelcomePage from "./pages/main";


import AdminParcel from "./parcels/Admin1";
import ReceiveAll from "./parcels/getall";
import LoginParcel from "./parcels/login";
import PostParcel from "./parcels/post";
import RegisterParcel from "./parcels/register";


function App() {

  return (
    <div>
      <Routes>
        <Route path='/admin' element={<AdminParcel />} />

        <Route path='/login' element={< LoginParcel />}  />

        <Route path='/register' element={< RegisterParcel />}  />

        <Route path='/post' element={< PostParcel />}  />

        <Route path='/receive' element={< ReceiveAll />}  />

        <Route path='/cancel' element={< CancelData />}  />

        <Route index  element={< WelcomePage />}  />
       

        <Route path='/get' element={<RegisterData />} />

        <Route path='/destination' element={<DesForm />} />

        <Route path='/location' element={<LocationData />} />

        <Route path='/status' element={<LocForm />} />

        
      </Routes>
      <Outlet />
    
    </div>

  );



}

export default App;
