import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin: 20px;
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 0px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
  img {
    width: 100px;
    height: 100px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  isFinal: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: ${({ isFinal }) =>
    !isFinal
      ? '0.8'
      : '1'};
  }
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: ${({ isFinal }) =>
    !isFinal
      ? 'pointer'
      : 'default'};
    
    user-select: none;
    font-size: 0.8rem;
    width: 500px;
    height: 40px;
    margin: 10px 0;

    background: ${({ correct, isFinal, userClicked }) =>
    userClicked
      ? !isFinal
        ? 'linear-gradient(90deg, #ffeebb, #eebb33)'
        : correct
          ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
          : 'linear-gradient(90deg, #FF5656, #C16868)'
      : 'linear-gradient(90deg, #00bbbb, #009191)'};
    border: 0px;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: ${({ correct, isFinal, userClicked }) =>
    isFinal && !userClicked && correct
      ? '#00ff00'
      : '#fff'};
  }
`;
