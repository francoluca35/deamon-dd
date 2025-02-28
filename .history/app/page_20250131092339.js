import Image from "next/image";
import NavBar from "./components/Navbar";
import Inicio from "./pages/Home";
import Equipo from "./pages/Equipo";
import Especialidades from "./pages/Especialidades";

export default function Home() {
  return (
  <div>
    <NavBar/>
    <Inicio />
    <Equipo />
    <Especialidades />
  </div>
  );
}
