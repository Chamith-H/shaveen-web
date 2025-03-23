import "./App.css";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Routings } from "./components/layout/Routings";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routings />
      <Footer />
    </div>
  );
}

export default App;
