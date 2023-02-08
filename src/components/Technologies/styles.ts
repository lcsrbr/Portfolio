import styled from 'styled-components';

const TechDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  text-align: center;
  gap: 1rem;
  width: 80px;
  height: 80px;
  img {
    width: 50px;
  }
  p {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export default TechDiv;
