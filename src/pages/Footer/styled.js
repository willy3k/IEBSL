import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SectFoot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primaryDarkColor};
  color: white;
  padding: 30px;

  .foote {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h4 {
    margin-bottom: 10px;
  }
`;
