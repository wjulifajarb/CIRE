import React from "react";
import "./App.css";
import Layout from "./components/layouts/Layout";
import { DataProvider } from "./data/DataProvider";

function App() {
  return (
    <DataProvider>
      <div>
        <Layout />
      </div>
    </DataProvider>
  );
}

export default App;
