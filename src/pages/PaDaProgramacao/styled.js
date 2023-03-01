import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SecSobreNos = styled.section`
  width: 100%;
  /* background: black; */

  .fundo {
    display: flex;
    /* position: relative; */
    width: 100%;
    color: white;
  }

  img {
    background: black;
    /* opacity: 0.2; */
    width: 100%;
    height: 450px;
  }
  .title {
    color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4rem;
    transition: 1s;
  }
  span {
    font-size: 20px;
    margin-bottom: 5px;
  }
  h1 {
    text-align: center;
    font-size: 50px;
  }

  @media (max-width: 900px) {
    width: 100%;
    background: black;
    height: 250px;

    .fundo2 {
      background: linear-gradient(0, black, #000000);
      width: 100%;
      height: 250px;
    }
    @keyframes anim-stars {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(150px);
      }
    }
    img {
      background: black;
      opacity: 0.3;
      width: 100%;
      height: 250px;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      margin-top: 5rem;
    }
    h1 {
      text-align: center;
      font-size: 40px;
    }
  }
`;

export const SecProgramaçao = styled.section`
  color: black;
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 70px 20px;
    background: white;
    width: 600px;
    height: 250px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

    &:hover {
      transform: scale(1.1);
      transition: all ease 400ms;
      cursor: pointer;
    }
  }
  samp {
    font-size: 25px;
    padding: 0px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${colors.primaryHeader};
    border-radius: 50%;
    &:hover {
      background: black;
    }
  }

  .dia {
    padding: 20px 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .eventos {
    padding: 20px 30px;
    width: 100%;
    margin-bottom: 20px;
  }
  h3 {
    border-left: 6px solid ${colors.primaryHeader};
    padding-left: 5px;
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    .card {
      width: 100%;
    }
  }
`;

export const Footerr = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primaryDarkColor};
  color: white;
  padding: 30px;

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h4 {
    margin-bottom: 10px;
  }
`;
