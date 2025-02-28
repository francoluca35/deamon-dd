import Image from "next/image";
import NavBar from "./components/Navbar";
import Inicio from "./pages/Home";
import Equipo from "./pages/Equipo";
import Especialidades from "./pages/Especialidades";
import Desarrollo from "./pages/Desarrollo";
import Diseño from "./pages/Diseño";
import PCompetition from "./pages/PCompeticion";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <div>
    <NavBar/>
    <Inicio />
    <Equipo />
    <Especialidades />
    <Desarrollo />
    <Diseño />
    <PCompetition/>
    <Contacto />
    <Footer />
  </div>
  );
}
