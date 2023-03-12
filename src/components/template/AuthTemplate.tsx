import { User } from "firebase/auth";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../../pages/Categories/Categories";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products";

interface Props {
  auth: undefined | User;
}

const AuthTemplate: React.FC<Props> = ({ auth }) => {
  return auth ? (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/categories/*" element={<Categories />} />
      <Route path="/products/*" element={<Products />} />
    </Routes>
  ) : (
    <Login />
  );
};

export default AuthTemplate;
