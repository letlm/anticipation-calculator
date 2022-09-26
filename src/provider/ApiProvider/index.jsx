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
        setCalculation(...calculation, response.data);
      })
      .catch(() => {
        toast("❌ Erro ao fazer a solicitação de cálculo!", {
          className: "toastify-color-progress-error",
        });
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
