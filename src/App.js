import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Perfil from "./componentes/Perfil";

function App(props) {
  console.log(logo, useState);
  const perfiles = [
    {
      nombre: "Brais",
      pais: "Spain",
      cargo: "Software Engineer",
      empresa: "MoureDev",
      imagen: "brais",
      resena:
        "My name is Brais Moure, I am an independent IT entrepreneur and technology lover. Since 2010 I have worked in large companies in the sector such as Inditex, Indra or Altia. In 2014 I decided to create my own software development company, MoureDev, given my deep interest in new trends in the sector.",
      linkedin: "https://www.linkedin.com/in/braismoure/",
      youtube: "https://www.youtube.com/@mouredev",
    },
    {
      nombre: "Nicolás Schürmann Lindemann",
      pais: "New Zealand",
      cargo: "Senior Software Developer",
      empresa: "HolaMundo",
      imagen: "nicolas",
      resena:
        "I am a senior software developer, instructor of technologies for web and mobile development. Throughout my life I have managed to build a lot of software with tools and forms that have given resounding success and others a terrible failure. So I focus on delivering knowledge that can build world-class software that is easy to scale.",
      linkedin:
        "https://www.linkedin.com/in/nicolasschurmann/?originalSubdomain=nz",
      youtube: "https://www.youtube.com/@HolaMundoDev",
      twitter: "https://twitter.com/_nasch_?lang=es",
    },
    {
      nombre: "MiduDev",
      pais: "Spain",
      cargo: "Software Engineer",
      empresa: "MiduDev",
      imagen: "midu",
      resena:
        "I'm a Software Engineer, Web Programmer and Programmer. I am recognized as a GitHub Star for my contribution to the web development community. I usually stream learning and developing things with Javascript, React, Node.js, CSS and many more things.",
      linkedin: "https://www.linkedin.com/in/midudev/?originalSubdomain=es",
      youtube: "https://www.youtube.com/@midudev",
      twitter: "https://twitter.com/MoureDev",
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
