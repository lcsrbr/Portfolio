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

  :hover {
    background-color: ${colors.font1};
    box-shadow: 0 0 0 5px ${colors.font1}5f;
    color: #fff;
    .card {
      // display: flex;
      transform: translateY(-105%);
      z-index: 1;
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
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  padding: 100px 0px;
  gap: 3rem;
  // transform: translateY(0%);
  background-color: ${colors.background2}9a;
  // width: 600px;
  height: 240px;
  // margin-top: -240px;
  z-index: -5;
  border-radius: 15px;
`;
