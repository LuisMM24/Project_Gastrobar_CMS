import React from "react";
import { Route, Routes } from "react-router-dom";
import withHeader from "../../hoc/withHeader";

const Categories: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/new" element={<div>new Form</div>} />
      </Routes>
    </div>
  );
};

export default withHeader(Categories);
