import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .span {
    color: var(--blue-2);
    font-family: "SourceSansPro", sans-serif;
    font-size: 14px;
    text-align: left;
    font-weight: 700;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;

    button {
      width: 130px;
      height: 35px;
      border-radius: 0.5rem;
      border: none;
      background-color: var(--white-1);
      font-family: "SourceSansPro", sans-serif;
      font-weight: 700;
      color: var(--grey-3);
      transition: 0.5s;

      &:hover {
        background-color: var(--blue-2);
        color: var(--black);
      }
    }
  }

  @media (min-width: 800px) {
    width: 750px;

    .buttons {
      flex-wrap: nowrap;

      button {
        width: 25%;
      }
    }
  }
`;
