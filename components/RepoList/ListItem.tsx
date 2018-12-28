import * as React from 'react';
import { Repo } from '../../stores/repos';
import { List } from 'semantic-ui-react';

export interface IListItemProps {
  repo: Repo;
}

export function ListItem({ repo }: IListItemProps) {
  return (
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a" href={repo.htmlUrl} target="_blank">{repo.fullName}</List.Header>
        <List.Description>pushed at {repo.pushedAtDate}</List.Description>
      </List.Content>
    </List.Item>
  );
}
