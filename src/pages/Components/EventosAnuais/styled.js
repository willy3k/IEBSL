import styled from 'styled-components';

export const SecEventos = styled.section`
  flex-direction: column;
  padding: 50px 20px;
  background: whitesmoke;
  border-radius: 15px;
  color: black;
  margin-bottom: 30px;

  h1 {
    font-size: 35px;
    padding: 20px 0;
    text-align: center;
  }

  .P-eventos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .caminhada {
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
    transition: 1s;
    &:hover {
      box-shadow: 1px 1px 10px 2px black;
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

  .simposio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .congresso {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  @media (max-width: 600px) {
    padding: 30px 30px;
    border-radius: 0;
    box-shadow: none;

    .imgs {
      padding: 10px;
      width: 400px;
      height: 540px;
    }
  }
`;
