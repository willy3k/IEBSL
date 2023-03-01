import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Sectionc = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  background: white;

  .title {
    margin: 40px 0 20px 0;
    font-size: 45px;
  }
  span {
    text-align: center;
    font-size: 25px;
    opacity: 0.3;
    margin-bottom: 20px;
  }

  .section-ministerial {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    border-radius: 8px;
    box-shadow: 1px 3px 4px 1px rgba(1, 30, 132, 0.5);
  }
  .card:hover {
    transform: scale(1.05);
    transition: all ease 400ms;
    cursor: pointer;
  }

  img {
    width: 35px;
    margin: 30px 0;
  }

  .i {
    color: ${colors.primaryHeader};
    font-size: 35px;
    margin: 30px 0;
  }
  h2 {
    font-size: 29px;
    margin-bottom: 20px;
  }
  p {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 20px;
    font-weight: 900;
    opacity: 0.7;
  }
  button {
    font-size: 16px;
    padding: 10px 30px;
    margin: 20px 0;
    &:hover {
      background: rgba(1, 40, 132, 0.9);
      transition: all ease 200ms;
    }
  }
`;
