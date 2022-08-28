import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "store/store";
import App from "page/app";
import GlobalStyle from "styles/global"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
