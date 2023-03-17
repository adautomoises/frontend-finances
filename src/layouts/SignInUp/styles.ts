import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  color: white;
  font-size: 1.25rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  background-image: url("/assets/images/background.jpg");
  background-size: cover;
  background-position: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  div {
    display: flex;
    gap: 16px;
    button {
      font-size: 24px;
      padding: 12px;
      color: var(--WHITE);
      border: 1px solid var(--WHITE);
      border-radius: 4px;
      background: none;
      &:hover {
        color: var(--LIGHT_BLACK);
        border: 1px solid var(--LIGHT_GRAY);
        background-color: var(--LIGHT_GRAY);
      }
    }
  }
`;
