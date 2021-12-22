import React, { useContext } from 'react'
import {Navbar,Container,Nav,Button, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css'
import { UserContext } from './../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
      <>
        <Navbar style={{backgroundColor:'#6600FF'}} variant="dark">
        <Container>
        <Navbar.Brand className="brand_name" >Royal Books</Navbar.Brand>
        <Nav className="m-auto text-center">
          <Link className="nav_link" to="/home">Home</Link>
          <Link className="nav_link" to="/order">Order</Link>
          <Link className="nav_link" to="/manage">Admin</Link>
          <Link className="nav_link" to="">Deals</Link>
        </Nav>
        {
        loggedInUser.isSignedIn ? 
        <span> 
        {
          loggedInUser.photo ? (
              <Nav.Link as={Link} to="/profile">
                <img
                  className="avatar"
                  src={loggedInUser.photo}
                  alt={loggedInUser.name}
                />
              </Nav.Link>
            )
:
(
              <Nav.Link as={Link} to="/profile">
                <h5 className="text-white">{loggedInUser.name}</h5>
              </Nav.Link>
            )


        }
      
          
           </span>
         :
     <Link to="/login"> <button className="login_button">Login</button></Link>
      }
        </Container>
      
      </Navbar>
      
      </>
    );
};

export default Header;