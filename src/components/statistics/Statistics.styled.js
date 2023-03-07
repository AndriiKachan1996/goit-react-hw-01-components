import styled from 'styled-components';

export const Section = styled.section`
  background: whitesmoke;
  height: auto;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: flex-end;
  text-align: center;
  width: 250px;
`;

export const StatTitile = styled.h2`
  align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
`;

export const StatList = styled.ul`
  display: flex;
  height: 50px;
`;

export const StatItem = styled.li`
  align-items: center;
  color: #fff;
  display: flex;
  flex-basis: 25%;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
`;

export const Span = styled.span``;
