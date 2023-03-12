import React from "react";
import { Route, Routes } from "react-router-dom";
import withHeader from "../../hoc/withHeader";

const Products: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/new" />
      </Routes>
    </div>
  );
};

export default withHeader(Products);
