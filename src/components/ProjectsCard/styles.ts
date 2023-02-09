import styled from 'styled-components';
import colors from '../../styles/colors';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 600px;
  height: 340px;
  border-radius: 15px;

  .card {
    height: 240px;
  }

  :hover,
  :focus {
    background-color: ${colors.font1};
    box-shadow: 0 0 0 5px ${colors.font1}5f;
    color: #fff;
    .card {
      margin-top: -254px;
      display: flex;
      z-index: 0;
    }
  }
  h1 {
    position: absolute;
    margin-top: 5px;
    font-size: 150%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.background2}9f;
    color: ${colors.font3};
    border: none;
    border-radius: 15px;
    width: 250px;
    height: 50px;
    transition: 0.3s;
  }

  img {
    width: 100%;
    border-radius: 15px;
  }
  @media screen and (max-width: 1050px) {
    width: 40rem;
    height: auto;
  }

  @media screen and (max-width: 800px) {
    width: 25rem;
    height: auto;
  }

  @media screen and (max-width: 500px) {
    width: 20rem;
    height: auto;
  }
`;

export const Infos = styled.div`
  display: none;
  animation: fadeIn 1s;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  padding: 100px 0px;
  gap: 3rem;
  background-color: ${colors.background2}9a;
  // width: 600px;
  height: 240px;
  // margin-top: -240px;
  z-index: -5;
  border-radius: 15px;
`;
