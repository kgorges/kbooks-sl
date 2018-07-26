import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./views/App";
import configureStore from "./state/store";
import "./index.css";

const reduxStore = configureStore({
  navigation: { drawer: { open: false } },
});

const RootHtml = () => (
  <ReduxProvider store={reduxStore}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
);

render(<RootHtml />, document.getElementById("root"));
