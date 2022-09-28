import styled from "styled-components";

export const Container = styled.div`
  label {
    color: var(--grey-3);
    font-family: "SourceSansPro", sans-serif;
    font-size: 14px;
    text-align: left;
  }

  .error {
    font-size: 14px;
    color: var(--red);
    font-weight: 700;
  }

  .max {
    height: 25px;
    font-size: 14px;
    color: var(--white-3);
    font-weight: 700;
  }
`;

export const Context = styled.section`
  input {
    height: 37px;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--grey-2);
  }
`;
