import styled from 'styled-components';

export const Header = styled.header`
@media only screen and (max-width: 800px) {
  h1 {
    font-size: 25px;
    z-index: -3;
    }
  }

  display: flex;
  width: 100%;
  position: fixed;
  z-index: 3;
  align-items: center;
  // gap: 40rem;
  justify-content: space-between;
  padding:  0px 1vh 0px 1vh;
  background-color: ${({ theme }) => theme.background1};
  height: 70px;
  h1 {
    color: ${({ theme }) => theme.font1};
  }
  h1: hover {
    color: ${({ theme }) => theme.font2}};
  }
`;

export const Nav = styled.div<{ open: boolean }>`
display: flex;
gap: 1rem;

  button {
    border: none;
    background-color: transparent;
  }
  justify-content: center;
  a {
    color: ${({ theme }) => theme.font2}};
    display: flex;
    align-items: center;
  }
  nav {
    display: flex;
    gap: 1rem;
  }
  a: hover {
    color: ${({ theme }) => theme.font1};
  }

  @media only screen and (min-width: 800px) {
    .container {
      display: none;
    }
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 25px;
    height: 2px;
    background-color: ${({ theme }) => theme.font1};
    margin: 2px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    transform: translate(0, 5px) rotate(-45deg);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    transform: translate(0, -3px) rotate(45deg);
  }
  @media only screen and (max-width: 800px) {
    display: flex;
    align-items: center;

    .container: {
      position: absolute;
      display: inline-block;
      cursor: pointer;
      z-index: 2;
    }

    nav {
      align-items: center;
      transform: ${({ open }) => (open ? `translateX(0)` : `translateX(100%)`)};
      background-color: ${({ theme }) => theme.background2};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 30%;
      height: 100vh;
      position: fixed;
      z-index: -1;
      top: 0;
      right: 0;
    }
  }
`;

export const Switch = styled.div`
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 51px;
    height: 24px;
    background-color: ${({ theme }) => theme.font1};
    border-radius: 34px;
    background-image: url(${({ theme }) => theme.moon});
    background-position: ${({ theme }) =>
      theme.theme === 'light' ? 'left' : 'right'};
    background-repeat: no-repeat;
    background-size: 25px 25px;
  }
`;
