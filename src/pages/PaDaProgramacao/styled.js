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
  .fundo2 {
    background: linear-gradient(0, black, #000000);
    width: 100%;
    height: 450px;
  }
  .stars {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    box-shadow: 50px 30px white, 100px 80px white, 80px 120px white,
      300px 20px white, 250px 130px white, 200px 50px white, 150px 100px white,
      320px 100px white;
    animation: anim-stars 10s linear infinite;
    transition: 1s;
  }

  @keyframes anim-stars {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(350px);
    }
  }
  img {
    background: black;
    /* opacity: 0.2; */
    width: 100%;
    height: 450px;
  }
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    margin-top: 10rem;
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
  color: white;
  border: 1px solid;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    background: ${colors.primaryDarkColor};
    width: 85%;
    border-radius: 8px;
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
    border-left: 3px solid ${colors.primaryHeader};
    padding-left: 5px;
    font-size: 20px;
    margin-bottom: 10px;
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
