import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider";
import { Container } from "./styles";

function FormCalculator() {
  const { insertCalculation } = useContext(ApiContext);

  const schema = yup.object().shape({
    amount: yup
      .number("Valor precisa ser um número")
      .typeError("Obrigatório")
      .required("Campo obrigatório")
      .min(1000, "Valor mínimo de 1000"),
    installments: yup
      .number("Valor precisa ser um número")
      .typeError("Obrigatório")
      .required("Campo obrigatório")
      .max(12, "Valor máximo de 12 parcelas"),
    mdr: yup
      .number("Valor precisa ser um número")
      .typeError("Obrigatório")
      .required("Campo obrigatório")
      .min(1, "Valor mínimo de 1"),
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
        <span>Simule sua Antecipação</span>
        <div className="content">
          <div>
            <label>Informe o valor da venda *</label>
            <input
              type="number"
              placeholder="R$ 3000,00"
              {...register("amount")}
            />
            {errors.amount && (
              <span className="error">{errors.amount.message}</span>
            )}
          </div>
          <div>
            <label>Em quantas parcelas *</label>
            <input
              type="number"
              placeholder="4"
              {...register("installments")}
            />
            <span className="max">Máximo de 12 parcelas</span>
            {errors.installments && (
              <span className="error">{errors.installments.message}</span>
            )}
          </div>
          <div>
            <label>Informe o percentual de MDR *</label>
            <input type="number" placeholder="6%" {...register("mdr")} />
            {errors.mdr && <span className="error">{errors.mdr.message}</span>}
          </div>
        </div>
      </form>
    </Container>
  );
}

export default FormCalculator;
