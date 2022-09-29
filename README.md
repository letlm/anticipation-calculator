
# Calculadora de Antecipação

O projeto visa calcular quanto custa antecipar uma transação. O usuário precisa informar o valor da venda, quantidade de parcelas e o percentual de MDR(taxa cobrada pelas adquirentes sobre cada transação de cartão de crédito ou débito)

Para realizar o cálculo foi realizado o consumo de uma API já existente:  
`https://frontend-challenge-7bu3nxh76a-uc.a.run.app`


## Nesta aplicação foram inseridos possíveis cenários para:

- Timeout
- Internal Server Error
- Delay de resposta

A aplicação inicia no estado default, ou seja, com as funcionalidades ok, mas caso deseje simular os possíveis cenários é só clicar nos botões e realizar a simulação da antecipação normalmente para visualizar as respostas.


## Screenshots
![App Screenshot](https://i.imgur.com/mKmdFWc.png)

## Instalação

Clone o projeto
```bash
  git clone git@github.com:letlm/anticipation-calculator.git
```

Entre no diretório do projeto

```bash
  cd antecipation-calculator
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn start
```

- A aplicação irá abrir na porta:3000. Caso não abra automaticamente no seu navegador, acesse `http://localhost:3000/` 

## Link da aplicação: 
https://antecipation-calculator.vercel.app/

