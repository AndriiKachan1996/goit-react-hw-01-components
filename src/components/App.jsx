import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendsList } from './friendList/FriendsList';
import { TransactionHistory } from './transactions/TransactionHistory';

import transactions from '..//data/transaction';
import friends from '..//data/friends';
import data from '..//data/statistics';
import user from '..//data/user';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
