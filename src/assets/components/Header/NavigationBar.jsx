import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from "@mui/icons-material/Menu";

// Shared Tailwind CSS classes
const darkBackground = "bg-dark";
const lightText = "text-light";

const NavigationBar = () => {
  return (
    <Navbar
      style={{ color: "white" }}
      bg="dark"
      variant="dark"
      expand="lg"
      className={`${darkBackground} ${lightText} p-1`}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <MenuIcon className="mt-2" />
          <NavItem linkText="Today's Deals" href="#deals" />
          <NavItem linkText="Customer Service" href="#customer-service" />
          <NavItem linkText="Registry" href="#registry" />
          <NavItem linkText="Gift Cards" href="#gift-cards" />
          <NavItem linkText="Sell" href="#sell" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavItem = ({ iconUrl, linkText, href }) => {
  return (
    <Nav.Link href={href}>
      {iconUrl && <img aria-hidden="true" alt="menu-icon" src={iconUrl} />}
      {linkText}
    </Nav.Link>
  );
};

export default NavigationBar;
