import * as React from 'react';

import './App.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

  export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="white" light expand="md">
            <NavbarBrand className="logo" href="/">
            <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" ></img>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/"><span className="about">About us</span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap" className="career">Career</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap" className="deparments">Deparments</NavLink>
                </NavItem>
               
                
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
