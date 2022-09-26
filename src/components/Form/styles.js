import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white-1);

  form {
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.75rem;
      color: var(--grey-3);
      font-weight: 600;
      height: 37px;
    }

    .content {
      display: flex;
      flex-direction: column;
      height: 280px;
      justify-content: space-around;

      input {
        height: 37px;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid var(--grey-2);
      }

      label {
        color: var(--grey-3);
        font-family: "SourceSansPro", sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .max {
        font-size: 14px;
        color: var(--white-3);
        font-weight: 700;
      }

      .error {
        font-size: 14px;
        color: var(--red);
        font-weight: 700;
      }
    }
  }
`;
