import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./views/App";
import configureStore from "./state/store";
import "./index.css";

const reduxStore = configureStore({
  navigation: { drawer: { open: false } },
  ledgerEntry: {
    data: { items: [], fetchDate: "2000-01-01 00:00:00", dirty: false },
    ui: {
      loading: false,
      selected: [],
      currentPage: 0,
      rowsPerPage: 5,
      edit: false,
      editId: "0",
    },
  },
});

const RootHtml = () => (
  <ReduxProvider store={reduxStore}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>
);

render(<RootHtml />, document.getElementById("root"));
