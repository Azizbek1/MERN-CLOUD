import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import Register from "./authorization/Register";
import Login from "./authorization/Login";
import { auth } from "../actions/user";

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(auth())
}, [])
  
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
 
          <Route path="/" element={<Main />} />
           {!isAuth && <Route path="/register" element={<Register />} />}
           {!isAuth && <Route path="/login" element={<Login />} />}
          {/* {user && <Route path="/admin" exact element={<Adminmain />} />} */}
          {/* <Route path="/admin" element={<Navigate to="/login" replace />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
