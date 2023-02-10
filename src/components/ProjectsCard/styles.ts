import styled from 'styled-components';

export const Div = styled.div`
h2 {
  margin: 8px;
}
@media screen and (max-width: 500px) {
  width: 300px;
  height: 150px;
}

.card {
  @media screen and (max-width: 500px) {
    position: fixed;
    top: 25rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: 300px;
    height: 80vh;
    background-color: ${({ theme }) => theme.font3};
    backdrop-filter: blur(10px);
  }
}
  width: 500px;
  height: 300px;
  :hover {
    .img {
      filter: blur(5px);
    }
    .card {
      display: flex;
      background-color: ${({ theme }) => theme.font3}9f;
      :hover {
        box-shadow: 0 0 0 5px ${({ theme }) => theme.font1}9f;
      }
  }
  border-radius: 10px;



`;

export const Infos = styled.div`
  display: none;
  flex-direction: column;
  margin-top: -304px;
  height: 100%;
  background-color: red;
  position: relative;
  z-index: 2;
  text-align: center;
  gap: 1rem;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const Desc = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Techs = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    p {
      font-size: 8px;
    }
  }
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 30px;
  }
`;

export const BgImg = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  object-position: 50%;
  z-index: 0;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 150px;
  }
`;

export const Footer = styled.div`
  position: relative;
  bottom: 0;
`;
