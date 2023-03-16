import styled from '@emotion/styled';

export const SectionName = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  padding: 25px;
  background-color: beige;
  &:nth-of-type(1) {
    margin-top: 25px;
    border-top: 1px solid darkred;
    border-left: 1px solid darkred;
    border-right: 1px solid darkred;
    border-radius: 10px 0 0 0;
  }
  &:nth-of-type(2) {
    border-bottom: 1px solid darkred;
    border-left: 1px solid darkred;
    border-right: 1px solid darkred;
    border-radius: 0 0 10px 0;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
`;
