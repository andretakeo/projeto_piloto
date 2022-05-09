import React from 'react';
import './Topbar.css';
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
function TopBar() {
  return (
    <div className="navbar">
      <div>
        <Navbar color="dark" dark expand fixed="top" full light>
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/lista">Candidatos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Forms</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/graficos">Gráficos</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default TopBar;
