import "./App.css";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Landingpage from "pages/Landingpage";
function App() {
  return (
    <div className="App">
      <Nav />
      <Landingpage />
      <Footer />
    </div>
  );
}

export default App;
