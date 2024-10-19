import Login from "./Components/Login-registration/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Login-registration/Registration/Registration";
import Home from "./Components/Order/Home/Home";
import CreateOrder from "./Components/Order/CreateOrder/CreateOrder";
import PreviousOrders from "./Components/Order/PreviousOrders/PreviousOrders";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/createorder" element={<CreateOrder/>}/>
          <Route path="/orders" element={<PreviousOrders/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
