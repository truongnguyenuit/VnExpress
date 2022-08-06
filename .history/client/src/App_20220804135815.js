import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configRouter } from './router/configRouter';
import NavbarComponent from './components/NavbarComponent';
import ProtectedRoute from "./router/protectedRouter";

function App() {


  return (
    <div>
      <BrowserRouter>
      <div className="fixed top-0 left-0 right-0 z-10">
          <NavbarComponent />
        </div>
        <span className=" text-blue-600/100">
          asdasd
        </span>

      </BrowserRouter>
    </div>
  );
}

export default App;
