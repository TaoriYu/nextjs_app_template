import * as React from 'react';
import { List, Image } from 'semantic-ui-react';
import { User } from '../../stores/users';

export interface IUserItemProps {
  user: User;
}

export function UserItem({ user }: IUserItemProps) {
  return (
    <List.Item>
      <Image avatar src={user.avatarUrl} />
      <List.Content>
        <List.Header as="a">{user.login}</List.Header>
      </List.Content>
    </List.Item>
  );
}
