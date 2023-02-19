import styled from 'styled-components';

export const ImgText = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  img {
    width: 300px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px ${({ theme }) => theme.font1}5f;
  }
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  max-width: 1000px;
  @media screen and (max-width: 1050px) {
    max-width: 500px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 600px) {
    max-width: 300px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: justify;
    color: ${({ theme }) => theme.font2};
  }
  color: white;
  gap: 2rem;
  width: 800px;
  font-size: 90%;

  span {
    font-size: 150%;
  }
  @media screen and (max-width: 1050px) {
    width: 40rem;
  }
  @media screen and (max-width: 800px) {
    width: 25rem;
  }
  @media screen and (max-width: 500px) {
    width: 20rem;
  }
`;

export const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background1};
  @media screen and (max-width: 1300px) {
    height: 100%;
    margin-top: 70px;
    margin-bottom: 100px;
  }
  @media screen and (max-height: 780px) {
    margin-top: 5rem;
    margin-bottom: 8rem;
  }
`;

export const Techs = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  color: ${({ theme }) => theme.font2};
  section {
    //   div {
    //     filter: ${({ theme }) =>
      theme.theme === 'dark' ? `invert(0)` : `invert(90%)`};
    //   }
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: ${({ theme }) => theme.font3};
    border-radius: 15px 15px 5px 5px;
    scroll-behavior: auto;
    scroll-behavior: smooth;
    width: 100%;
    color: ${({ theme }) => theme.font1};
    display: flex;
    // justify-content: center;
    align-items: center;
    height: 130px;
    p {
      text-align: justify;
      color: #fff;
    }
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.font2};
      border-radius: 12px;
    }
    gap: 2rem;
  }
`;
