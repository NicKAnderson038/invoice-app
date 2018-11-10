import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import CreditPage from "./containers/Credit";
import HistoryPage from "./containers/History";
import UploadPage from "./containers/Upload";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="link" to="/">
            Upload
          </Link>
          <Link className="link" to="/credit">
            Credit
          </Link>
          <Link className="link" to="/history">
            Credit
          </Link>
        </header>
        <main>
          <Route exact path="/" component={UploadPage} />
          <Route exact path="/credit" component={CreditPage} />
          <Route exact path="/history" component={HistoryPage} />
        </main>
      </div>
    );
  }
}

export default App;
