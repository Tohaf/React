
import { Routes, Route, Outlet } from "react-router";

import CancelData from "./pages/delete";


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
        
      </Routes>
      <Outlet />
    
    </div>

  );



}

export default App;
