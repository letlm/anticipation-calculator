import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../../components/Input";

describe("Input", () => {
  test("Testando a captura de valor da venda", () => {
    render(
      <Input
        error=""
        name="amount"
        placeholder="Exemplo: R$ 3000,00"
        register={() => {}}
        span=""
      />
    );
    expect(screen.getByPlaceholderText("Exemplo: R$ 3000,00")).toBeTruthy();
  });

  test("Testando a captura de quantidade de parcelas", () => {
    render(
      <Input
        error=""
        name="installments"
        placeholder="Exemplo: 4"
        register={() => {}}
        span="Máximo de 12 parcelas"
      />
    );
    expect(screen.getByPlaceholderText("Exemplo: 4")).toBeTruthy();
  });

  test("Testando a captura de percentual de MDR", () => {
    render(
      <Input
        error=""
        name="mdr"
        placeholder="Exemplo: 6%"
        register={() => {}}
        span=""
      />
    );
    expect(screen.getByPlaceholderText("Exemplo: 6%")).toBeTruthy();
  });

  test("Testando um possível erro", () => {
    render(
      <Input
        error="Valor mínimo de 1000"
        name="amount"
        placeholder="Exemplo: R$ 3000,00"
        register={() => {}}
        span=""
      />
    );

    const error = screen.getByText(/Valor mínimo de 1000/);

    expect(error).toBeInTheDocument();
  });
});
