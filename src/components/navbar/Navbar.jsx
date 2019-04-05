import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import routes from "../../routes"

 const NavBar = (props) => {
const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(
!collapsed
);
  }

  
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
            {routes.map((r, key) => {
                if (r.display === true) {
                  return (
                    <NavItem>
                      <NavLink key={key} href={r.path}>
                        {r.name}
                      </NavLink>
                    </NavItem>
                  );
                } else {
                  return null;
                }
            })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
        }


export default NavBar;