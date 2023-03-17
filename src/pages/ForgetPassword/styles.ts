import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Form = styled.form`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #ee82d125;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  text-align: center;
  button {
    width: 100%;
    height: 2rem;
    font-weight: bold;
    background-color: var(--WHITE);
    border: 1px solid var(--BLACK);
    border-radius: 1rem;

    &:hover {
      background-color: var(--DARK_WHITE);
      border: 1px solid var(--DARK_BLACK);
    }
  }
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  input {
    width: 100%;
    display: flex;
    background: none;
    border: none;
    padding: 0 0.5rem;
    color: var(--WHITE);
    &::placeholder {
      color: var(--WHITE);
    }
    &:focus {
      outline: none;
      background: none;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--WHITE) !important;
    -webkit-box-shadow: none;
    transition: background-color 9999999s ease-in-out 0s;
  }
  svg {
    width: 1.5rem;
    margin: 0.5rem 1rem;
  }

  border-bottom: 3px solid var(--WHITE);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  transition: border-bottom ease-in-out 2s;
  margin: 2rem 0;

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
