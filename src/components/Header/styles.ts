import styled from 'styled-components';
import colors from '../../styles/colors';

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
  background-color: ${colors.background1};
  height: 70px;
  h1 {
    color: ${colors.font1};
  }
  h1: hover {
    color: ${colors.font2}};
  }
`;

export const Nav = styled.div<{ open: boolean }>`
  button {
    border: none;
    background-color: transparent;
  }
  justify-content: center;
  a {
    display: flex;
    align-items: center;
  }
  nav {
    display: flex;
    gap: 1rem;
  }
  a: hover {
    color: ${colors.font1};
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
    background-color: ${colors.font1};
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
      background-color: ${({ open }) => open && colors.background1};
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

export const Switch = styled.button`
    position: relative;
    display: inline-block;
    width: 51px;
    height: 24px;
  }

input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.font2};};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '🌚';
    text-shadow: 2px 2px 5px #000000;
    text-align: center;
    font-size: 25px;
    // height: 26px;
    // width: 26px;
    left: -5px;
    bottom: -3px;
    // background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${colors.font1};};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    content: '🌝';

  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
