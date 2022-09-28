import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider";
import { Container } from "./styles";

function ChangeScenary() {
  const { setDelay, setErrorOff, setTimeout } = useContext(ApiContext);

  return (
    <Container>
      <section className="span">
        <span>
          Clique em cada um dos botões para simular possíveis cenários
        </span>
      </section>
      <section className="buttons">
        <button
          onClick={() => {
            setDelay(false);
            setTimeout(false);
            setErrorOff(false);
          }}
        >
          Normal
        </button>
        <button
          onClick={() => {
            setDelay(true);
            setTimeout(false);
            setErrorOff(false);
          }}
        >
          Conexão lenta
        </button>
        <button
          onClick={() => {
            setDelay(false);
            setTimeout(true);
            setErrorOff(false);
          }}
        >
          Timeout da Api
        </button>
        <button
          onClick={() => {
            setDelay(false);
            setTimeout(false);
            setErrorOff(true);
          }}
        >
          Sem conexão
        </button>
      </section>
    </Container>
  );
}

export default ChangeScenary;
