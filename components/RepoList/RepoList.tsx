import { observer } from 'mobx-react';
import * as React from 'react';
import { injectStore } from '../../stores/provider/InjectStore';
import { ReposStore } from '../../stores/repos';
import { ListItem } from './ListItem';
import { SearchContainer } from './Search';

export interface IRepoListProps {
  reposStore: ReposStore;
}

@observer
export class RepoList extends React.Component<IRepoListProps> {
  public render() {
    const { reposStore } = this.props;
    return (
      <div>
        <SearchContainer />
        <div>10 of {reposStore.totalCount}</div>
        <ul>
          {reposStore.repos.map((repo) => <ListItem repo={repo} key={repo.id} />)}
        </ul>
      </div>
    );
  }
}

export const RepoListContainer = injectStore({ reposStore: ReposStore })(RepoList);
