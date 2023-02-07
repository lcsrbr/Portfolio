import styled from 'styled-components';
import colors from '../styles/colors';
export const Header = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  align-items: center;
  gap: 40rem;
  justify-content: center;
  background-color: ${colors.background2};
  height: 70px;
  h1 {
    color: ${colors.font1};
  }
  h1: hover {
    color: ${colors.font2}};
  }
  nav {
    display: flex;
    gap: 1rem;;
    align-items: center;
  }
  nav a: hover {
    color: ${colors.font1};
}
`;

export const Button = styled.button<{ open: boolean }>`
  display: ${({ open }) => (open ? `none` : `fixed`)};
`;
