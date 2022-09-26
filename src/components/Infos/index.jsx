import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider";

function Infos() {
  const { calculation } = useContext(ApiContext);

  console.log(calculation);

  return (
    <div>
      <span>VOCÊ RECEBERÁ</span>
      <div>
        <span>
          Amanhã:{" "}
          {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[1]}`}
        </span>
        <span>
          Em 15 dias:{" "}
          {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[15]}`}
        </span>
        <span>
          Em 30dias:{" "}
          {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[30]}`}
        </span>
        <span>
          Em 90dias:{" "}
          {calculation.length === 0 ? "R$ 0,00" : `R$ ${calculation[90]}`}
        </span>
      </div>
    </div>
  );
}

export default Infos;
