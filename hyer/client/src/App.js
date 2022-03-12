import logo from "./logo.svg";
import "./App.css";
import Landingpage from "pages/Landingpage";
import Nav from "components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Landingpage />
    </div>
  );
}

export default App;
