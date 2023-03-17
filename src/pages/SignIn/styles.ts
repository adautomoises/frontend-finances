import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: #ee82d125;
  padding: 2rem;
  border-radius: 1rem;
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  input {
    width: 100%;
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
  margin-bottom: 2rem;
`;

export const GoogleOrFacebook = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--WHITE);
  button {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--WHITE);
    border-radius: 1rem;
    padding: 0 1rem;
    p {
      width: 100%;
    }
    :hover {
      background-color: var(--DARK_WHITE);
    }
  }
`;

export const LoginOrRegister = styled.section`
  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--WHITE);
    border-radius: 1rem;
    padding: 0.5rem;
    p {
      span {
        color: var(--BLACK);
        font-weight: bold;
      }
    }
  }
  p {
    span {
      display: flex;
      justify-content: center;
      width: 100%;
      color: var(--WHITE);
    }
  }
`;

export const SaveOrForget = styled.section`
  width: 100%;
  div {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0.2rem;
      border: 2px solid var(--WHITE);
      outline: none;
      width: 1rem;
      height: 1rem;
      transition: all 0.2s ease-in-out;
    }

    input[type="checkbox"]:checked {
      background-color: var(--GREEN);
      border: 2px solid var(--GREEN);
    }
  }
  a {
    color: var(--WHITE);
    /* text-decoration: none; */
  }
  margin-bottom: 2rem;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--WHITE);
  border-radius: 50%;
  background: none;
  svg {
    font-size: 24px;
    fill: var(--WHITE);
  }
  &:hover {
    background: var(--DARK_WHITE);
    border: 1px solid var(--WHITE);
    border-radius: 50%;
    svg {
      fill: var(--BLACK);
    }
  }
`;
