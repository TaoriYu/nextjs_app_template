import * as React from 'react';
import { Repo } from '../../stores/repos';

export interface IListItemProps {
  repo: Repo;
}

export function ListItem({ repo }: IListItemProps) {
  return (
    <li key={repo.id}>{repo.fullName}</li>
  );
}
