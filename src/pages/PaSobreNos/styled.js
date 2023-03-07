import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SecSobreNos = styled.section`
  width: 100%;

  .fundo {
    display: flex;
    width: 100%;
    align-items: center;
    color: white;
  }

  img {
    filter: brightness(25%);
    object-fit: cover;
    width: 100%;
    height: 500px;
  }
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
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

    img {
      /* background: black;
      opacity: 0.5; */
      width: 100%;
      height: 250px;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
    }
    h1 {
      text-align: center;
      font-size: 40px;
    }
  }
`;

export const SecHistoria = styled.section`
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    padding: 20px;
    border-bottom: 2px solid ${colors.primaryHeader};
    margin-bottom: 20px;
    font-size: 40px;
    display: flex;
    justify-content: center;
  }
  p {
    padding: 30px;
  }
  span {
    font-weight: 900;
  }
  @media (max-width: 600px) {
    p {
      padding: 0;
    }
  }
`;

export const SecPastoral = styled.section`
  flex-direction: column;
  padding: 50px 20px;
  color: white;
  /* background: ${colors.primaryHeader}; */
  background: black;

  h2 {
    font-size: 35px;
    padding: 20px 0;
    text-align: center;
    text-shadow: 1px 2px 4px white;
  }

  .fPastoral {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .pastor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .imgs {
    padding: 10px;
    border-radius: 15px;
    width: 400px;
    height: 600px;
  }

  img {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    box-shadow: 1px 2px 10px 1px white;
    &:hover {
      transform: scale(1.05);
      transition: all ease 600ms;
      cursor: pointer;
    }
  }

  h3 {
    padding: 10px;
    font-size: 25px;
    text-align: center;
  }
  p {
    font-size: 18px;
    text-align: center;
  }

  .missionaria {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .filhas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  @media (max-width: 600px) {
    padding: 50px 50px;

    .imgs {
      padding: 10px;
      width: 380px;
      height: 560px;
    }
  }
`;

export const SecFotosHistoricas = styled.section`
  display: flex;
  padding: 50px 20px;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
  }

  .cards-Photos {
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .photos {
    border: 1px solid;
    width: 350px;
    height: 500px;
    margin: 10px;
  }
  img {
    width: 100%;
    height: 100%;
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
