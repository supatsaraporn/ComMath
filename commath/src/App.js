import React from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routing = useRoutes(routes);
  return <div>{routing}</div>;
};

export default App;
