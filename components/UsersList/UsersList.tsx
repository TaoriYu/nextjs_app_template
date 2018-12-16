import * as React from 'react';
import { ListItem } from 'semantic-ui-react';
import { injectStore } from '../../stores/provider/InjectStore';
import { UsersStore } from '../../stores/users';
import { UserItem } from './UserItem';
import * as styles from './usersList.css';

export interface IUsersListProps {
  usersStore: UsersStore;
}

export function UsersList({ usersStore }: IUsersListProps) {
  return (
    <div className={styles.style}>
      <ListItem>
        { usersStore.users.map((user) => <UserItem user={user} key={user.login} />) }
      </ListItem>
    </div>
  );
}

export const UsersListContainer = injectStore({ usersStore: UsersStore })(UsersList);
