import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Crianças = styled.section`
  background: white;
  padding: 50px 30px;

  .crianças {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .imge {
    margin: 10px;
    width: 400px;
    height: 280px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  .descr {
    margin: 10px;
    width: 600px;
    padding-bottom: 110px;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 35px;
  }
  span {
    font-size: 18px;
    opacity: 0.7;
  }
`;

export const SecFundo = styled.section`
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
export const Perolas = styled.section`
  color: white;
  background: ${colors.primaryHeader};
  padding: 50px 30px;

  .perolas {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .imge {
    margin: 10px;
    width: 450px;
    height: 280px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  .descr {
    margin: 10px;
    width: 600px;
    padding-bottom: 110px;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 35px;
  }
  span {
    font-size: 18px;
    opacity: 0.7;
  }
`;

export const Luluzinhas = styled.section`
  padding: 50px 30px;

  .luluzinhas {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .imge {
    margin: 10px;
    width: 400px;
    height: 280px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  .descr {
    margin: 10px;
    width: 600px;
    padding-bottom: 110px;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 35px;
  }
  span {
    font-size: 18px;
    opacity: 0.7;
  }
`;

export const Bolinhas = styled.section`
  color: white;
  background: ${colors.primaryHeader};
  padding: 50px 30px;

  .bolinhas {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .imge {
    margin: 10px;
    width: 450px;
    height: 280px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  .descr {
    margin: 10px;
    width: 600px;
    padding-bottom: 110px;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 35px;
  }
  span {
    font-size: 18px;
    opacity: 0.7;
  }
`;
