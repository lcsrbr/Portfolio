import styled from 'styled-components';
import colors from '../../styles/colors';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  flex-direction: column;
  gap: 3rem;
  color: ${colors.font1};
  text-align: center;
  span {
    color: ${colors.font2};
    font-size: 1.5rem;
  }

  div {
    width: 50%;
  }
  img {
    border-radius: 50%;
    width: 300px;
    background-color: ${colors.background2};
    padding: 15px;
  }

  .line-1 {
    top: 50%;
    color: ${colors.font2};
    margin: 0 auto;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    margin: 0 auto;
    font-size: 40px;
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
  }
`;
