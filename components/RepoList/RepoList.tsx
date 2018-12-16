import * as React from 'react';
import { List } from 'semantic-ui-react';
import * as styles from './repoList.css';
import { observer } from 'mobx-react';
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
        <div className={styles.subText}>10 of {reposStore.totalCount}</div>
        <List>
          {reposStore.repos.map((repo) => <ListItem repo={repo} key={repo.id} />)}
        </List>
      </div>
    );
  }
}

export const RepoListContainer = injectStore({ reposStore: ReposStore })(RepoList);
