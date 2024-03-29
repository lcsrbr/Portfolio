import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 150%;
  color: ${({ theme }) => theme.font2};
  p img {
    width: 50px;
  }

  @media (max-width: 1400px) {
    margin-top: 100px;
    margin-bottom: 120px;
  }
  // height: 80vh;
  background-color: ${({ theme }) => theme.background1};
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;
  a {
    img {
      width: 30px;
      filter: ${({ theme }) =>
        theme.theme === 'dark' ? `invert(0)` : `invert(90%)`};
    }
  }
}

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  height: 90vh;
  @media (max-width: 500px) {
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  @media (max-width: 500px) {
    width: 200px;
  }
  @media (max-width: 1000px) {
    width: 400px;
  }
  @media (max-width: 800px) {
    width: 300px;
  }
  text-align: center;
  gap: 1rem;
  text-align: justify;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  input,
  textarea,
  button {
    font-size: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 15px;
    width: 380px;
    background-color: ${({ theme }) => theme.background2};
    color: ${({ theme }) => theme.font2};

    @media (max-width: 1000px) {
      width: 280px;
    }
    height: 50px;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.font3};
  }

  input:focus,
  textarea:focus,
  button:hover,
  button:focus {
    box-shadow: 0 0 0 5px ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.font1};
    color: #fff;
  }

  textarea {
    height: 200px;
  }
  button {
    cursor: pointer;
  }
`;
