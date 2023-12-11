import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/hero/Banner";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
//import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
      {/*  <Contact/> */}
      <Footer />
    </div>
  );
}

export default App;
