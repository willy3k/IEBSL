import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const SectServ = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primaryHeader};
  color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.4);
  margin: 5px;

  .servi {
    margin: 30px 0;
    width: 70%;
  }
  img {
    border: 1px solid;
    border-radius: 10px;
    width: 100%;
  }
`;
