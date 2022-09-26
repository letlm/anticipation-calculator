import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Dashboard from "./pages/Dashboard";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Dashboard />
    </>
  );
}

export default App;
