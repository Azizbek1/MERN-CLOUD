import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
const Navbar = () => {
  const dispatch = useDispatch()
  const [showBasic, setShowBasic] = useState(false);
  const isAuth = useSelector(state => state.user.isAuth)
  return (
    <div>
      <MDBNavbar expand="lg" light bgColor="success">
        <MDBContainer>
          <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link className="nav-link"  to="/">
                  Main
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                 {!isAuth && <Link className="nav-link" to="/login">Login</Link>}
              </MDBNavbarItem>
              <MDBNavbarItem>
                  {!isAuth && <Link className="nav-link" to="/register">Register</Link>}
              </MDBNavbarItem>
              <MDBNavbarItem>
                  {isAuth && <Link onClick={() => dispatch(logout()) } className="nav-link btn btn-danger" to="/register">Выход</Link>}
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
