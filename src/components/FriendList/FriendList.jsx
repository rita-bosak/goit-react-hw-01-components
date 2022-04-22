import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendListUl } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListUl>
  );
}
