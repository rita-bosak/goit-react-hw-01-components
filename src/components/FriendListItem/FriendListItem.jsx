import PropTypes from 'prop-types';
import {
  FriendListItemStyle,
  FriendItemSpan,
  Avatar,
  FriendName,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendListItemStyle>
      {isOnline && <FriendItemSpan>{isOnline}</FriendItemSpan>}
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemStyle>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
