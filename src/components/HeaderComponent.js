import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";
class Header extends Component {
  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/"> Ristorante Con Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 sm-6">
                <h1>Ristorante Con Confusion</h1>
                <p>
                  {" "}
                  We take inspiration from the wrold's nest cuisines, and create
                  a fusion experience.Our lipsmacking creations will tickle your
                  culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
