import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { calculator } from "../../services/api";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [calculation, setCalculation] = useState([]);

  const insertCalculation = (data) => {
    calculator
      .post("", data)
      .then((response) => {
        console.log(response.data);
        setCalculation(response.data);
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 408") {
          toast("message: Timeout ❌", {
            className: "toastify-color-progress-error",
          });
        }
        if (err.message === "Request failed with status code 500") {
          toast("message: Internal Server Error ❌", {
            className: "toastify-color-progress-error",
          });
        }
      });
  };

  return (
    <ApiContext.Provider
      value={{
        calculation,
        setCalculation,
        insertCalculation,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
