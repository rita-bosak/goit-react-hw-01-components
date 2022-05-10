import user from '../json/user';
import data from '../json/data';
import friends from '../json/friends.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './FriendList/FriendList';
import transactions from '../json/transactions';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { GlobalStyle, Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
