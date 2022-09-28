import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { calculator } from "../../services/api";

export const ApiContext = createContext([]);

function ApiProvider({ children }) {
  const [calculation, setCalculation] = useState([]);
  const [timeout, setTimeout] = useState(false);
  const [errorOff, setErrorOff] = useState(false);
  const [delay, setDelay] = useState(false);

  const insertCalculation = (data) => {
    calculator
      .post("", data)
      .then((response) => {
        setCalculation(response.data);
      })
      .catch((err) => {
        toast(" ❌ Ocorreu um erro, por favor tente novamente mais tarde", {
          className: "toastify-color-progress-error",
        });
      });
  };

  const testErrorOff = (data) => {
    calculator.post("?internalError", data).catch((err) => {
      setTimeout(() => {
        toast(" ❌ Erro de conexão, tente novamente!", {
          className: "toastify-color-progress-error",
        });
      }, 2000);
    });
  };

  const testTimeout = (data) => {
    calculator.post("?timeout", data).catch((err) => {
      setTimeout(() => {
        toast(" ❌ Tempo esgotado, tente novamente!", {
          className: "toastify-color-progress-error",
        });
      }, 3000);
    });
  };

  const testDelay = (data) => {
    setTimeout(() => {
      toast(" 🕐 Conexão lenta, por favor aguarde!", {
        className: "toastify-color-progress-error",
      });
    });
    calculator.post("?delay=4000", data).then((response) => {
      setCalculation(response.data);
    });
  };

  return (
    <ApiContext.Provider
      value={{
        calculation,
        setCalculation,
        insertCalculation,
        delay,
        setDelay,
        errorOff,
        setErrorOff,
        timeout,
        setTimeout,
        testErrorOff,
        testTimeout,
        testDelay,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
