import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ApiContext } from "../../provider/ApiProvider";
import { Container } from "./styles";
import Input from "../Input";

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
          <Input
            label="Informe o valor da venda *"
            placeholder="Exemplo: R$ 3000,00"
            register={register}
            name="amount"
            error={errors.amount?.message}
          />
          <Input
            label="Em quantas parcelas *"
            placeholder="Exemplo: 4"
            register={register}
            name="installments"
            error={errors.installments?.message}
            span="Máximo de 12 parcelas"
          />

          <Input
            label="Informe o percentual de MDR *"
            placeholder="Exemplo: 6%"
            register={register}
            name="mdr"
            error={errors.mdr?.message}
          />
        </div>
      </form>
    </Container>
  );
}

export default FormCalculator;
