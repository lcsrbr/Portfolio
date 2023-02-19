import styled from 'styled-components';

export const FooterDiv = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  height: 100px;
  background: ${({ theme }) => theme.background2};
  bottom: 0;
  position: absolute;

  div {
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

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18x;
    line-height: 15px;
    color: ${({ theme }) => theme.font2};
    img 
  }
`;
