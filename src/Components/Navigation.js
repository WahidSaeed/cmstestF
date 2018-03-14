import React from 'react';
import '../App.css';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {
  Link
} from 'react-router-dom'

class Navigation extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogged: JSON.parse((localStorage["isLogged"] ? localStorage["isLogged"] : 'false'))
    }
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage["isLogged"] = false;
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <Link to="/" className="navbar-brand">React CMS {this.state.isLogged === true ? '- Admin Panel' : ''}</Link>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {
                (this.state.isLogged === true? 
                  <NavLink href="#" onClick={this.logOut}><Link to="/Login">LogOut</Link></NavLink>:
                  <NavLink href="#"><Link to="/Login">LogIn</Link></NavLink>
                )
              }
              
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
