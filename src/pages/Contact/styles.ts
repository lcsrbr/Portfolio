import styled from 'styled-components';
import colors from '../../styles/colors';

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 110px;
  font-size: 150%;
  color: ${colors.font2};
  p img {
    width: 50px;
  }
  height: 80vh;
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;
  a {
    img {
      width: 30px;
    }
  }
}

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 700px;
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
    background-color: ${colors.background2};
    color: ${colors.font2};
    border: none;
    border-radius: 15px;
    width: 400px;
    height: 50px;
    transition: 0.3s;
  }

  input:focus,
  textarea:focus,
  button:hover,
  button:focus {
    background-color: ${colors.font1};
    box-shadow: 0 0 0 5px ${colors.font1}5f;
    color: #fff;
  }

  textarea {
    height: 250px;
  }
  button {
    cursor: pointer;
  }
`;
