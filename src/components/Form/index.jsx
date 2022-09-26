import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider";
import { Container } from "./styles";

function FormCalculator() {
  const { insertCalculation } = useContext(ApiContext);

  const schema = yup.object().shape({
    amount: yup.number().required("Campo obrigatório").min(1000),
    installments: yup.number().required("Campo obrigatório"),
    mdr: yup.number().required("Campo obrigatório"),
    // days: yup.array(),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitCalculation = (object) => {
    if ("amount" !== "" && "installments" !== "" && "mdr" !== "") {
      insertCalculation(object);
      setValue("amount", "");
      setValue("installments", "");
      setValue("mdr", "");
    }
  };

  return (
    <Container>
      <form onChange={handleSubmit(onSubmitCalculation)}>
        <div>
          <label>Informe o valor da venda *</label>
          <input
            type="number"
            placeholder="R$ 3000,00"
            {...register("amount")}
          />
          {errors.amount && <span>{errors.amount.message}</span>}
        </div>
        <div>
          <label>Em quantas parcelas *</label>
          <input
            type="number"
            placeholder="Máximo de 12 parcela"
            {...register("installments")}
          />
          {errors.installments && <span>{errors.installments.message}</span>}
        </div>
        <div>
          <label>Informe o percentual de MDR *</label>
          <input type="number" placeholder="6%" {...register("mdr")} />
          {errors.mdr && <span>{errors.mdr.message}</span>}
        </div>
        {/* <div>
          <label>Dias</label>
          <input type="text" placeholder="8" {...register("days")} />

          {errors.days && <span>{errors.days.message}</span>}
        </div> */}
        {/* <button>Calcular</button> */}
      </form>
    </Container>
  );
}

export default FormCalculator;
