import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  background: ${colors.primaryHeader};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  .log {
    width: 90px;
    height: 80px;
  }
  img {
    background: transparent;
    width: 100%;
    height: 100%;
  }

  a {
    font-size: 18px;
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
  header {
    padding: 0 0 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  header .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    visibility: hidden;
    opacity: ;
  }

  @media only screen and (max-width: 900px) {
    header .nav-btn {
      visibility: visible;
      opacity: 1;
      &:hover {
        background: ${colors.primaryHeader};
        opacity: 0.6;
      }
    }
    header nav {
      z-index: 1;
      position: fixed;
      top: 0;
      right: 0;
      width: 50%;
      height: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background: #5767aa;
      border-radius: 0 0 20px 20px;
      transition: 1s;
      transform: translateY(-100vh);
      background: ${colors.primaryHeader};
      box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    }
    header .response_nav {
      transform: none;
    }
    nav .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      margin-bottom: 5px;
      &:hover {
        background: black;
        opacity: 0.6;
      }
    }
  }
`;
