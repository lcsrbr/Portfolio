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
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;
