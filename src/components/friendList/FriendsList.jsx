import PropTypes from 'prop-types';
import { FriendsUl } from './FriendList.styled';
import { Item } from './Item';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.map(friend => (
        <Item
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsUl>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
