import reactjs from "react";
import "../estilos/Perfil.css";

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
    </div>
  );
}

export default perfil;
