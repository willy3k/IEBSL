import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Sectionc = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 40px 0 30px 0;

  .center {
    width: 100%;
    display: flex;
    padding: 10px;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 30px 0;
  }
  .descri {
    width: 500px;
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
    width: 600px;
    height: 400px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
