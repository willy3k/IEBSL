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
`;

export const SecPastoral = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    padding: 20px 0;
    text-align: center;
  }
  .fPastoral {
    display: flex;
    justify-content: center;
  }
`;

export const SecFotosHistoricas = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
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
