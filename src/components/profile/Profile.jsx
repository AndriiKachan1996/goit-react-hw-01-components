import PropTypes from 'prop-types';
import {
  Container,
  Item,
  Label,
  Quantity,
  UserDescription,
  UserInfoBox,
  UserLocation,
  UserName,
  UserPhoto,
  UserTag,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <UserDescription>
        <UserPhoto src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserInfoBox>
        <Item>
          <Label>Followers</Label>

          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>

          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>

          <Quantity>{stats.likes}</Quantity>
        </Item>
      </UserInfoBox>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
