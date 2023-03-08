import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Sectionc = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 40px 0 30px 0;

  .center1 {
    width: 100%;
    border: 1px solid;
  }
  .center {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 30px 0;
  }
  .descri {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: 0 30px;
  }
  h3 {
    color: ${colors.primaryHeader};
    font-size: 30px;
    margin-bottom: 15px;
  }
  h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }
  p {
    opacity: 0.8;
  }
  .img {
    margin: 0 30px;
    display: flex;
    width: 600px;
    height: 400px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  @media (max-width: 900px) {
    .img {
      margin-top: 25px;
      width: 100%;
      height: 400px;
    }
    .descri {
      margin: none;
    }
    .img {
      margin: none;
    }
  }
`;
