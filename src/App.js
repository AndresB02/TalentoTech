import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Perfil from "./componentes/Perfil";

function App(props) {
  console.log(logo, useState);
  const perfiles = [
    {
      nombre: "Brais",
      pais: "España",
      cargo: "Ingeniero de Software",
      empresa: "independiente",
      imagen: "brais",
      resena:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
      linkedin: "https://www.linkedin.com/in/braismoure/",
      youtube: "https://www.youtube.com/@mouredev",
      twitter: "https://twitter.com/MoureDev",
    },
    {
      nombre: "Facundo",
      pais: "Argentina",
      cargo: "Desarrollador",
      empresa: "Sombreros de paja",
      imagen: "facundo",
      resena:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
      linkedin:
        "https://www.linkedin.com/in/facundo-torres-b17871247/?originalSubdomain=ar",
      youtube: "",
      twitter: "",
    },
    {
      nombre: "MiduDev",
      pais: "España",
      cargo: "Desarrollador",
      empresa: "MiduDev",
      imagen: "midu",
      resena:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
      linkedin: "https://www.linkedin.com/in/midudev/?originalSubdomain=es",
      youtube: "https://www.youtube.com/@midudev",
      twitter: "https://twitter.com/midudev",
    },
  ];
  return (
    <>
      <div className="contenedor-principal">
        <h1 className="titulo">Mis Youtuber's favoritos</h1>
        {perfiles.map((perfil) => (
          <Perfil
            imagen={perfil.imagen}
            nombre={perfil.nombre}
            pais={perfil.pais}
            cargo={perfil.cargo}
            empresa={perfil.empresa}
            resena={perfil.resena}
            linkedin={perfil.linkedin}
            youtube={perfil.youtube}
            twitter={perfil.twitter}
          />
        ))}
      </div>
    </>
  );
}

export default App;
