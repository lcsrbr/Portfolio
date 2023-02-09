import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background-color: ${({ theme }) => theme.background1};
  @media (max-width: 900px) {
    height: auto;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;
  color: ${({ theme }) => theme.font1};

  @media (max-width: 1210px) {
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin-bottom: 200px;
    margin-top: 80px;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 300px;
  background-color: ${({ theme }) => theme.background2};
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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.background2};
    color: ${({ theme }) => theme.font2};
    border: none;
    border-radius: 15px;
    width: 250px;
    height: 50px;
    transition: 0.3s;
  }

  a:hover {
    background-color: ${({ theme }) => theme.font1};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.font1}5f;
    color: #fff;
  }
`;
export const Span = styled.span`
  color: ${({ theme }) => theme.font2};
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
max-width: 800px;
font-size: 140%;
transition: 0s;

@media (max-width: 1210px) {
  max-width: 600px;
font-size: 120%;
}

@media (max-width: 800px) {
  max-width: 300px;
font-size: 15px;

.line-1 {
  font-size: 25px;
}
}

@media (min-width: 800px) {

.line-1 {
  font-size: 50px;
}
}

.line-1 {
  top: 50%;
  color: ${({ theme }) => theme.font2};
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  margin: 0 auto;
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
    border-right-color: ${({ theme }) => theme.background2};
  }

  to {
    border-right-color: transparent;
  }
`;
