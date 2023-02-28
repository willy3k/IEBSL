import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SecContato = styled.section`
  margin-top: 50px;
  background: ${colors.primaryDarkColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 35px;
    color: white;
    margin: 30px 0;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 560px;
    padding: 20px;
    border-radius: 15px;
    background: ${colors.primaryHeader};
    box-shadow: 1px 1px 4px 1px white;
    margin-bottom: 20px;
  }
  label {
    font-size: 20px;
    margin-bottom: 15px;
    color: white;
    width: 90%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
  input {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    font-size: 19px;
    padding: 10px;
  }
  textarea {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    font-size: 19px;
    padding: 10px;
  }
  button {
    font-size: 18px;
    padding: 10px;
    border-radius: 8px;
    width: 90%;
    &:hover {
      background: ${colors.sucessColor};
    }
  }

  @media (max-width: 900px) {
    form {
      background: ${colors.primaryDarkColor};
      width: 90%;
      box-shadow: none;
    }
    button {
      width: 100%;
      background: ${colors.primaryHeader};
    }
    label {
      width: 100%;
    }
    input {
      color: white;
      border: 2px solid ${colors.primaryHeader};
      background: ${colors.primaryDarkColor};
    }
    textarea {
      color: white;
      border: 2px solid ${colors.primaryHeader};
      background: ${colors.primaryDarkColor};
    }
  }
`;

export const Footerr = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primaryDarkColor};
  color: white;
  padding: 30px;

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h4 {
    margin-bottom: 10px;
  }
`;
