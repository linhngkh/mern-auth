import Header from "./components/headers/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
