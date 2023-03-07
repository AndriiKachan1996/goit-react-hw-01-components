import PropTypes from 'prop-types';
import {
  FriendsImg,
  FriendsItem,
  FriendsParagraph,
  FriendsSpan,
} from './ItemStyled';

export const Item = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsSpan isHide={isOnline}></FriendsSpan>
      <FriendsImg src={avatar} alt="User avatar" width="48" />
      <FriendsParagraph>{name}</FriendsParagraph>
    </FriendsItem>
  );
};

Item.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
