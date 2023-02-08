import styled from 'styled-components';
import colors from '../../styles/colors';

export const FooterDiv = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  height: 80px;
  background: ${colors.background2};
  bottom: 0;
  position: absolute;

  div {
    display: flex;
    gap: 1rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.font2};
  }
`;
