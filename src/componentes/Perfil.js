import React from "react";
import "../estilos/Perfil.css";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function perfil(props) {
  return (
    <div className="contenedor-perfil">
      <img
        className="imagen-perfil"
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="Foto de Brais"
      />
      <div className="contenedor-texto-perfil">
        <h1 className="nombre-pais">
          {props.nombre} en {props.pais}
        </h1>
        <p className="cargo-perfil">
          {props.cargo} en {props.empresa}
        </p>
        <p className="resena-perfil">{props.resena}</p>
      </div>
      {/*Botones para seguir en redes sociales*/}
      <div className="contendor-botones">
        <button
          className="button"
          onClick={() => window.open(props.linkedin, "_blank")}
        >
          <FaLinkedin />
        </button>
        <button
          className="button"
          onClick={() => window.open(props.youtube, "_blank")}
        >
          <FaYoutube />
        </button>
        <button
          className="button"
          onClick={() => window.open(props.twitter, "_blank")}
        >
          <BsTwitterX />
        </button>
      </div>
    </div>
  );
}

export default perfil;
