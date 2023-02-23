import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Sectionc = styled.section`
  background: ${colors.primaryHeader};
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    padding-top: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .cards {
    border-radius: 8px;
    margin: 0 15px;
    width: 400px;
  }
  h2 {
    color: white;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 900;
  }
  h3 {
    font-size: 20px;
    padding: 15px;
    display: flex;
    text-align: center;
    justify-content: center;
    color: white;
    background: black;
  }

  .cultos {
    margin: 10px 0;
  }
  .ct {
    display: flex;
    justify-content: space-between;
  }
  span {
    color: white;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 0;
  }
`;
