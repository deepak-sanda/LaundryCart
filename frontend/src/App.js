import Login from "./Components/Login-registration/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Login-registration/Registration/Registration";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
