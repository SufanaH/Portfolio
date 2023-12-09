import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/hero/Banner";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
