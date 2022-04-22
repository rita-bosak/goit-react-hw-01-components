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
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
