import styled from 'styled-components';

export const Fundo = styled.div`
  width: 100%;
  background: black;
  color: white;

  .div-fundo {
    display: flex;
    position: relative;
    width: 100%;
    color: white;
  }
  img {
    background: black;
    opacity: 0.3;
    width: 100%;
  }
  h1 {
    margin-bottom: 15px;
    font-size: 40px;
  }
  span {
    margin-bottom: 15px;
    font-size: 19px;
  }
  h3 {
    font-size: 23px;
  }
  button {
    margin-bottom: 15px;
  }

  .Chamada {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    margin-top: 13rem;
    transition: 1s;
  }

  @media (max-width: 900px) {
    .Chamada {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      margin-top: 2rem;
    }
  }
`;
