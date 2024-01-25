import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div id="wrapper">
     <Header/>
     <Outlet/>
    
    </div>
  );
}

export default App;
