import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
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
      font-size: 1.2rem;
      color: var(--grey-3);
      font-weight: 600;
      height: 37px;
    }

    .content {
      display: flex;
      flex-direction: column;
      height: 280px;
      justify-content: space-around;
    }
  }

  @media (min-width: 800px) {
    width: 450px;
    height: 100%;

    form {
      span {
        font-size: 1.75rem;
        height: 37px;
      }
    }
  }
`;
