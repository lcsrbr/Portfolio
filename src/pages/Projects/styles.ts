import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 100px;

  // height: 100%
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: ${({ theme }) => theme.background1};
`;

export const Container = styled.section`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  // flex-direction: column;
  margin-bottom: 120px;
  // height: 100%

  flex-wrap: wrap;

  justify-content: center;
  gap: 5rem;
  width: 100%;
  //   max-width: 1000px;
`;
