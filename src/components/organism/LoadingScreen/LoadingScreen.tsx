import React from "react";
import logo from "../../../assets/img/logo.png";
const LoadingScreen = () => {
  return (
    <section className="text-center py-5">
      <div>
        <img className="mx-auto h-48 w-auto" src={logo} alt="logo" />
      </div>
      <span className="text-pink-800 text-bold ">CARGANDO PÁGINA</span>
    </section>
  );
};

export default LoadingScreen;
