import { observable } from 'mobx';
import { Api } from '../api';
import { makeStore } from '../provider/MakeStore';
import { RepoDto, SearchResults } from './dto';
import { Repo } from './Repo';

@makeStore(ReposStore)
export class ReposStore extends Api {
  @observable public repos: RepoDto[] = [];

  public async searchRepos(query: string) {
    const { data } = await this.api.get('/repositories', {
      params: {
        q: query,
      },
    });

    const { items, totalCount } = this.toDTO(SearchResults, data);
    if (totalCount > 0) {
      this.repos = items.map((item) => new Repo().fromDto(item));
    }
  }
}
