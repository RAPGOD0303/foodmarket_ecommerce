import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/Listgroup';
import '../CSS/Navbarcomp.css'

const navDropdownList = [
  {"id" : 1, "category":"Groceries"},
  {"id" : 2, "category":"Drinks"},
  {"id" : 3, "category":"Chocolate"}
]

export default function Navbarcomp() {
  return (
    <>
      <Navbar  expand='lg' className='bg-body-tertiary'>
        <Container fluid>
          <Navbar.Brand href='/' className='navbar-logo mt-2 ml-2'>
          <img src={logo} alt="foodmart logo" />
          </Navbar.Brand>

          <Navbar.Collapse className='nav-multioption'>
          <Nav className=' mx-5 align-items-center'>
            <NavDropdown title ="All Categories" >
              <ListGroup as='ul'>
                {navDropdownList.map((item, index)=>(
                  <ListGroup.Item as='li' key={index} className='nav-dropdown-hover'>
                    {item.category}
                  </ListGroup.Item>
                )
                )}
              
              </ListGroup>
            </NavDropdown>
            <Form className='form-input ms-3'>
              <Form.Control
              type='text'
              placeholder='Search for more than 20000 products'
              style={{ minWidth: '350px', maxWidth: '600px', width: '100%' }}
              />
            </Form>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
