import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  background-color: #ee82d125;
  border-radius: 1rem;
  padding: 2rem;
  div:first-child {
    display: flex;
    width: 100%;
  }
`;

export const BackButton = styled.button`
  position: absolute;
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

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-left: 10%;
  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 24px;
    margin-right: 20px;
  }
`;

export const FormSteps = styled.div`
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  gap: 10px;
  padding: 0 1rem;
`;

export const StepOne = styled.div`
  display: flex;
  width: 100%;
  height: 0.5rem;
  background-color: var(--ORANGE);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const StepTwo = styled.div`
  display: flex;
  width: 100%;
  height: 0.5rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: var(--WHITE);
`;

export const FormInputs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
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

  input[type="date"] {
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      width: 1.5rem;
      height: 1.5rem;
      color: var(--WHITE);
      filter: invert();
    }
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Select = styled.div`
  width: 100%;
  select {
    width: 100%;
  }
  margin-bottom: 2rem;
`;

export const FormButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 0 1rem;
  gap: 1rem;
`;
export const PreviousStepButton = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  font-weight: bold;
  background-color: var(--WHITE);
`;

export const NextStepButton = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  font-weight: bold;
  background-color: var(--BLUE);

  &:hover {
    background-color: var(--DARK_BLUE);
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  font-weight: bold;
  background-color: var(--GREEN);

  &:hover {
    background-color: var(--DARK_GREEN);
  }
`;
