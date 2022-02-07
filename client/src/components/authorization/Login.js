import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const formChange = (e) => {
        e.preventDefault()
      }
    const dispatch = useDispatch()
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-md-5 mt-5">
          <h1 className="text-center">Login</h1>
          <form onSubmit={formChange}>
            <MDBInput
              className="mb-4"
              type="text"
              id="form1Example1"
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <MDBBtn onClick={() => dispatch(login(name, password))} type="submit" block>
              Sign in
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
