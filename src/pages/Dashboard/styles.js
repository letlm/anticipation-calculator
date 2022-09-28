import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .container-center {
    width: 90%;
    height: 800px;
    border: 1px solid var(--grey-1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
      width: 750px;
      height: 400px;
      flex-direction: row;
    }
  }

  @media (min-width: 800px) {
    height: 100vh;
    width: 100vw;
  }
`;
