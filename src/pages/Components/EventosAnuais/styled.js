import styled from 'styled-components';

export const SecEventos = styled.section`
  flex-direction: column;
  padding: 50px 20px;
  color: black;

  h1 {
    font-size: 35px;
    padding: 20px 0;
    text-align: center;
    text-shadow: 1px 2px 3px black;
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
    box-shadow: 1px 2px 10px 1px black;
    transition: 1s;
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
      width: 400px;
      height: 560px;
    }
  }
`;
