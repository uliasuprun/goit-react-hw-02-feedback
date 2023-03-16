import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  gap: 10px;
`;

export const ButtonFeedback = styled.button`
  display: flex;
  flex-direction: row;
  border: none;
  justify-content: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px 0 10px 0;
  background-color: darkred;
  color: #ffffff;
  &:nth-of-type(1):hover {
    background-color: forestgreen;
  }
  &:nth-of-type(2):hover {
    background-color: orange;
  }
  &:nth-of-type(3):hover {
    background-color: red;
  }
`;
