import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import countries from './countries.json';
import './App.css';

class App extends Component {
  state = {
    countries: [],
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ countries: countries, loading: false })
    }, 3000);
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
                          exact path="/countries/:cca3"
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
