import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CreditPage from "./containers/Credit";
import HistoryPage from "./containers/History";
import UploadPage from "./containers/Upload";
import AppBarExampleIcon from "./components/Nav/NavBar";
import { Tabs, Tab } from "material-ui/Tabs";
import classes from "./App.module.css";

const styles = {
  headline: {
    // fontSize: 24,
    // paddingTop: 16,
    // marginBottom: 12,
    // fontWeight: 400,
    textTransform: "none"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBarExampleIcon />
          <Tabs className={classes.tabmain}>
            <Tab
              label="Upload"
              style={styles.headline}
              className={classes.tabcolor}
              containerElement={<Link to="/" />}
            />
            <Tab
              label="Credit"
              style={styles.headline}
              className={classes.tabcolor}
              containerElement={<Link to="/credit" />}
            />
            <Tab
              label="History"
              style={styles.headline}
              className={classes.tabcolor}
              containerElement={<Link to="/history" />}
            />
          </Tabs>
          {/* <header className="App-header">
          <Link className="link" to="/">
            Upload
          </Link>
          <Link className="link" to="/credit">
            Credit
          </Link>
          <Link className="link" to="/history">
            Credit
          </Link>
          </header> */}
          <main>
            <Route exact path="/" component={UploadPage} />
            <Route exact path="/credit" component={CreditPage} />
            <Route exact path="/history" component={HistoryPage} />
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
