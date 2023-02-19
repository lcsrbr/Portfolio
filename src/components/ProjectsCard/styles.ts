import styled from 'styled-components';

export const Div = styled.div<{ active?: boolean }>`
color: ${({ theme }) => theme.font2};

h2 {
  margin: 8px;
  color: ${({ theme }) => theme.font1};
}
@media screen and (max-width: 500px) {
  width: 300px;
  height: 150px;

}
.card {
  background-color: ${({ theme }) => theme.font3};
  background-color: ${({ theme }) => theme.background2}9a;
  :hover {
    box-shadow: 0 0 0 5px ${({ theme }) => theme.font1}9f;
  }
  ${({ active }) =>
    active &&
    `
  @media screen and (max-width: 500px) {
    display: flex;
    position: fixed;
    top: 20rem;
    left: 50%;
    transform: translate(-50%, 0);
    width: 90%;
    height: 95vh;
    backdrop-filter: blur(50px);
    z-index: 5;

  }
  `}
}
  width: 500px;
  height: 300px;
  @media screen and (min-width: 500px) {

  :hover {
    .img {
      filter: blur(10px);
    }
    .card {
      display: flex;
      background-color: ${({ theme }) => theme.font3}9f;
      :hover {
        box-shadow: 0 0 0 5px ${({ theme }) => theme.font1}9f;
      }
  }
}
  border-radius: 10px;  
`;

export const Infos = styled.div`
  display: none;
  flex-direction: column;
  margin-top: -304px;
  height: 100%;
  position: relative;
  z-index: 2;
  text-align: center;
  gap: 1rem;
  padding: 10px;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
  button {
    position: absolute;
    background-color: transparent;
    border: none;
    margin: 5px;
    right: 0;
    top: 0;
    img {
      width 15px;
    }
  }
`;

export const Desc = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
`;

export const Techs = styled.div`
  display: flex;
  width: 100%;
  p {
    font-size: 10px;
  }
  img {
    width: 25px;
  }
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: no-wrap;
  overflow-x: auto;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.font1}9f;
    border-radius: 12px;
  }
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  p {
    font-size: 10px;
  }
  img {
    width: 25px;
    filter: ${({ theme }) =>
      theme.theme === 'dark' ? `invert(0)` : `invert(90%)`};
  }

  gap: 1rem;
  align-items: center;
  justify-content: center;
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
  box-shadow: 0 0 0 5px ${({ theme }) => theme.font3}5f;
`;

export const Footer = styled.div`
  position: relative;
  padding-bottom: 3px;
`;
