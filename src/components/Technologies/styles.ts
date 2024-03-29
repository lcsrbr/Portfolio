import styled from 'styled-components';

const TechDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  width: 80px;
  height: 80px;
  filter: ${({ theme }) =>
    theme.theme === 'dark' ? `invert(0)` : `invert(90%)`};
  img {
    width: 50px;
  }
  p {
    text-align: center !important;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default TechDiv;
