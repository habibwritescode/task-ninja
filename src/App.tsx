import "./App.css";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/Home";
import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="lg:container">
        <Home />
      </div>
    </>
  );
}

export default App;
