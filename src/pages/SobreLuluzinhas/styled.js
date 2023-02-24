import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SecInicio = styled.section`
  width: 100%;
  background: black;

  .fundo {
    display: flex;
    position: relative;
    width: 100%;
    color: white;
  }
  img {
    background: black;
    opacity: 0.2;
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
      margin-top: 3rem;
    }
  }
`;
export const SecSobreLuluzinhas = styled.section`
  padding: 50px 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-size: 35px;
    margin-bottom: 20px;
  }
  .card {
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
    font-size: 19px;
  }
  .segundo {
    background: ${colors.primaryDarkColor};
    color: white;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
  }
  .imge {
    width: 600px;
    height: 400px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .desc {
    padding: 0 20px;
    width: 600px;
  }
  p {
    opacity: 0.8;
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
