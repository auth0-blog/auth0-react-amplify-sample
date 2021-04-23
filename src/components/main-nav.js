import { NavLink } from "react-router-dom";
import React from "react";
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { useAuth0 } from "@auth0/auth0-react";

import {
  NavItem
} from "reactstrap";

const MainNav = () => {

  const {
    isAuthenticated
  } = useAuth0();


  return (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
    </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/profile"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Profile
        </NavLink>
      )}

      {!isAuthenticated && (

        <NavItem>
          <LoginButton />
        </NavItem>

      )}
      {isAuthenticated && (
        <NavItem>
          <LogoutButton />
        </NavItem>
      )}
    </div>
  );
}
export default MainNav;
