import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider";
import { Container } from "./styles";

function Infos() {
  const { calculation } = useContext(ApiContext);

  return (
    <Container>
      <div className="context">
        <span className="result">VOCÊ RECEBERÁ:</span>
        <span className="line"></span>
        <div>
          <div className="box">
            <span className="days">Amanhã:</span>
            <span className="total">
              {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[1]}`}
            </span>
          </div>
          <div className="box">
            <span className="days">Em 15 dias:</span>
            <span className="total">
              {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[1]}`}
            </span>
          </div>
          <div className="box">
            <span className="days">Em 30 dias:</span>
            <span className="total">
              {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[1]}`}
            </span>
          </div>
          <div className="box">
            <span className="days">Em 90 dias:</span>
            <span className="total">
              {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[1]}`}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Infos;
