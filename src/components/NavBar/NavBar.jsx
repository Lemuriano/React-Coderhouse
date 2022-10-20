import ImagenLogo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from '../CartWidget/CartWidget';
import {NavLink} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () =>{
    return(
      <Navbar bg="light" variant="light">
        <Container className="d-flex align-content-end">
          <Navbar.Brand as={NavLink} to="/"><img src={ImagenLogo} alt="logo" width="50" height="50"/>Lemuriano Travel</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="./nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Destinos" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="./categoria/argentina/norte">Norte</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="./categoria/argentina/sur">Sur</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="./categoria/argentina/este">Este</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="./categoria/argentina/oeste">Oeste</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="./contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
    )
}