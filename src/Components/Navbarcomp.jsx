import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/Listgroup";
import "../CSS/Navbarcomp.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
// import { GoTriangleDown } from "react-icons/go";
// import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";

const navDropdownList = [
  { category: "All Categories" },
  { category: "Groceries" },
  { category: "Drinks" },
  { category: "Chocolate" },
];


export default function Navbarcomp() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/" className="navbar-logo mt-2 ml-2">
            <img src={logo} alt="foodmart logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav-multioption" aria-controls="basic-navbar-nav">
            <div className="navbar-middle">
              <Nav className="mx-5 align-items-center navbar-row">
                <div className="navbar-dropdown">
                  <NavDropdown
                    title={selectedCategory}
                    className="category-dropdown"
                  >
                    <ListGroup as="ul">
                      {navDropdownList.map((item, index) => (
                        <ListGroup.Item
                          as="li"
                          key={index}
                          className="nav-dropdown-hover"
                          onClick={() => setSelectedCategory(item.category)}
                        >
                          {item.category}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </NavDropdown>
                </div>
                <div className="navbar-input">
                  <Form className="form-input ms-3">
                    <Form.Control
                      type="text"
                      placeholder="Search for more than 20,000 products"
                      style={{ width: "100%", border: "none" }}
                    />
                    <CiSearch size={30} color="grey" className="search-icon" />
                  </Form>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>

          <div className="nav-last mt-1">
            <div className="nav-contact">
              <p>For Support?</p>
              <h5>+980-34984089</h5>
            </div>
            <div className="nav-icons">
              <AiOutlineUser />
              <AiOutlineHeart />
            </div>
            <div className="nav-cart">
              <div className="cart-container">
                <NavDropdown title="Your Cart" id="cart-dropdown">
                </NavDropdown>
                <div className="cart-price">$1290.00</div>
              </div>
            </div>
          </div>
          
        </Container>
      </Navbar>

    </>
  );
}
