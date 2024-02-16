import "./App.css";
import Perfil from "./componentes/Perfil";

function App() {
  const perfiles = [
    {
      nombre: "Brais",
      pais: "España",
      cargo: "Ingeniero de Software",
      empresa: "independiente",
      imagen: "brais",
      resena:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
    },
    {
      nombre: "Facundo",
      pais: "Argentina",
      cargo: "Desarrollador",
      empresa: "Sombreros de paja",
      imagen: "facundo",
      resena:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
    },
  ];
  return (
    <>
      <div className="contenedor-principal">
        <h1>Mis personajes favoritos</h1>
        {perfiles.map((perfil) => (
          <Perfil
            imagen={perfil.imagen}
            nombre={perfil.nombre}
            pais={perfil.pais}
            cargo={perfil.cargo}
            empresa={perfil.empresa}
            resena={perfil.resena}
          />
        ))}
      </div>
    </>
  );
}

export default App;
