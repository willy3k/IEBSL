import styled from 'styled-components';

export const Fundo = styled.div`
  width: 100%;
  color: white;
  border-radius: 0 0 15px 15px;

  .div-fundo {
    display: flex;
    align-items: center;
    width: 100%;
    color: white;
    border-radius: 0 0 15px 15px;
  }
  img {
    filter: brightness(25%);
    object-fit: cover;
    width: 100%;
    height: 900px;
    /* border-radius: 0 0 15px 15px; */
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
    &:hover {
      background: rgba(1, 40, 132, 0.6);
      transition: all ease 200ms;
    }
  }

  .Chamada {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
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

    img {
      height: 250px;
    }
  }
`;
