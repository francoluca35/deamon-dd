import Inicio from "./pages/Home";
import Equipo from "./pages/Equipo";
import Especialidades from "./pages/Especialidades";
import Desarrollo from "./pages/Desarrollo";
import Diseño from "./pages/Diseño";
import PCompetition from "./pages/PCompeticion";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/WhatsApp";
import Navbar2 from "./components/Navbar/idex";

export default function Home() {
  return (
  <div>
    {/* <NavBar/> */}
    <Navbar2/>
    <Inicio />
    <div id="equipo">
    <Equipo />
    </div>
    <Especialidades />
    <div id="desarrollo">
      <Desarrollo />
    </div>
    
    <Diseño />
    <PCompetition/>
    <Contacto />
    <Footer />
    <FloatingWhatsApp />
  </div>
  );
}
