import styled from 'styled-components';
import colors from '../../styles/colors';

export const FooterDiv = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  height: 100px;
  background: ${colors.background2};
  bottom: 0;
  position: absolute;

  div {
    display: flex;
    gap: 2rem;
    a {
      img {
        width: 30px;
      }
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18x;
    line-height: 15px;
    color: ${colors.font2};
    img 
  }
`;
