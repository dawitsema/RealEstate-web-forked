import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
