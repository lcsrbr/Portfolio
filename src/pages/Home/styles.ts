import styled from 'styled-components';
import colors from '../../styles/colors';

export const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;
  color: ${colors.font1};
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 300px;
  background-color: ${colors.background2};
  padding: 15px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-top: 2rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.background2};
    color: ${colors.font2};
    border: none;
    border-radius: 15px;
    width: 250px;
    height: 50px;
    transition: 0.3s;
  }

  a:hover {
    background-color: ${colors.font1};
    box-shadow: 0 0 0 5px ${colors.font1}5f;
    color: #fff;
  }
`;
export const Span = styled.span`
  color: ${colors.font2};
  img {
    width: 70px;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
`;

export const TextDiv = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
text-align: center;
width: 800px;
max-width: 70%;
font-size: 140%;
}

.line-1 {
  top: 50%;
  color: ${colors.font2};
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  margin: 0 auto;
  font-size: 250%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

/* Animation */
.anim-typewriter {
  animation: typewriter 2s steps(20) 0.5s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}

@keyframes typewriter {
  from {
    width: 0;
  }

  to {
    width: 11em;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: ${colors.background2};
  }

  to {
    border-right-color: transparent;
  }
`;
