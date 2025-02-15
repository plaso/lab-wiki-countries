import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { getCountries } from "./services/CountriesService";
import './App.css';

class App extends Component {
  state = {
    countries: [],
    loading: true
  }

  componentDidMount() {
    getCountries()
      .then((countries) => {
        this.setState({ countries: countries, loading: false })
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
  
        <div className="container">
            {
              this.state.loading
                ? (
                  <div style={{ textAlign: "center" }}>
                    <PacmanLoader color="#0D6EFD" size={25} />
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-5">
                      <CountriesList countries={this.state.countries} />
                    </div>
                    <div className="col-7">
                      <Switch>
                        <Route
                          exact path="/countries/:alpha3Code"
                          render={(routeProps) => (
                            <CountryDetails {...routeProps} countries={this.state.countries} />
                          )}
                        />
                        <Route
                          path="/"
                          render={() => <h3>Please select a country</h3>}
                        />
                      </Switch>
                    </div>
                  </div>
                )
            }
        </div>
      </div>
    );
  }
}

export default App;
