import styled from 'styled-components';
import colors from '../../styles/colors';

export const ImgText = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  img {
    width: 300px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px ${colors.font1}5f;
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  max-width: 1000px;
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: justify;
  }
  color: white;
  gap: 2rem;
  width: 800px;
  span {
    font-size: 150%;
  }
`;

export const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Techs = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  section {
    width: 100%;

    display: flex;
    // justify-content: center;
    align-items: center;
    overflow-x: auto;
    height: 150px;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${colors.font2};
      border-radius: 12px;
    }
    gap: 2rem;
  }
`;
