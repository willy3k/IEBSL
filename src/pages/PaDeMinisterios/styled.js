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
