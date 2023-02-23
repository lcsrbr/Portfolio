import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  p {
    font-size: 3rem;
  }
  form {
    display: flex;
    flex-direction: column;
    section {
      display: flex;
      width: 500px;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        border: 1px solid #000;
        padding: 2px;
      }
    }
  }
`;
