import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import axios from 'axios';

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount = () => {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then((response) => {
        this.setState({ countries: response.data });
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <CountriesList countries={countries} />
        <Switch>
          <Route
            path="/countries/:cca3"
            render={(props) => (
              <CountryDetails {...props} countries={this.state.countries} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
