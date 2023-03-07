import styled from 'styled-components';

export const TransTabel = styled.table`
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 30%);
  font-size: 14px;
  margin-top: 50;
  width: 270px;
`;

export const TransThead = styled.thead`
  background-color: #3043f0;
  color: #d9f2cb;
  height: 30px;
`;

export const TransTr = styled.tr`
  &:nth-child(odd) {
    background-color: #fff;
  }
  &::nth-child(even) {
    background-color: #ecf1f4;
  }
`;
