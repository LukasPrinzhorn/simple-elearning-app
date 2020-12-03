import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    backgroundColor: 'rgba(0, 0, 0, 0.5)';
    background-size: cover;
    padding: 25px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }

  .App {
    background: rgba(255,255,255,0.6);
    padding: 25px;
    border-radius: 10px;
    min-width: 600px;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Times New Roman;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 200;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next, .end {
    :disabled {
      opacity: 0.5;
    }
    cursor: pointer;
    border: 0px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    width: 200px;
    margin: 20px;
    padding: 0 40px;
  }
  .start {
    background: linear-gradient(180deg, #fff, #99ff99);
  }
  .next {
    background: linear-gradient(180deg, #fff, #87f1ff);
  }
  .end {
    background: linear-gradient(180deg, #fff, #ff9999);
  }
`;