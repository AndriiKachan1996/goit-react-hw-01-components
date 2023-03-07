import styled from 'styled-components';

export const FriendsItem = styled.li`
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 30%);
  display: flex;
  font-size: 14px;
  font-weight: 700;
  gap: 10px;
  justify-content: flex-start;
  padding: 10px;
  width: 250px;
  cursor: pointer;
  &:hover {
    background: #948e93;
  }
`;

export const FriendsSpan = styled.span`
  background-color: ${({ isHide }) => (isHide ? 'green' : 'red')};
  border-radius: 50%;
  display: block;
  height: 20px;
  width: 20px;
`;

export const FriendsImg = styled.img`
  width: 60px;
`;

export const FriendsParagraph = styled.p`
  margin-left: 30px;
  font-size: 24px;
`;
