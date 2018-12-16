import * as React from 'react';
import { injectStore } from '../../stores/provider/InjectStore';
import { ReposStore } from '../../stores/repos';

export interface ISearchProps {
  reposStore: ReposStore;
}

export interface ISearchState {
  query: string;
}

export class Search extends React.Component<ISearchProps, ISearchState> {
  public readonly state = {
    query: ''
  };

  public render() {
    const { query } = this.state;
    return (
      <div>
        <input type="text" value={query} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Run</button>
      </div>
    );
  }

  private handleChange = ({ currentTarget }: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ query: currentTarget.value });
  }

  private handleClick = () => {
    this.props.reposStore.searchRepos(this.state.query);
  }
}

export const SearchContainer = injectStore({ reposStore: ReposStore })(Search);
