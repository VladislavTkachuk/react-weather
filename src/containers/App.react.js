import React, { Component } from 'react';
import WeatherDisplay from '../components/WeatherDisplay.react';
import SearchCity from "./SearchCity.react";

import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

const PLACES = [
  { name: "Kyiv" },
  { name: "Vinnitsa" },
  { name: "Lviv" },
  { name: "Kharkiv" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
      searchCity: null
    };
    this.changeCity = this.changeCity.bind(this);
  }

  changeCity(cityName) {
      this.setState({ activePlace: null, searchCity: cityName });
  }

  render() {
    const activePlace = this.state.activePlace;
    const searchCity = this.state.searchCity;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <SearchCity onChangeCity={this.changeCity.bind(this)} />
          </Row>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index, searchCity: null });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={Date.now()} name={searchCity || PLACES[activePlace].name} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
