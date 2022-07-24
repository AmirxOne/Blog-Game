import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Graph ql
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// react-router-dom
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
