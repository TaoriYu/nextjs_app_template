import { observable } from 'mobx';
import { Api } from '../api';
import { makeStore } from '../provider/MakeStore';
import { SearchResults } from './dto';
import { Repo } from './Repo';

@makeStore(ReposStore)
export class ReposStore extends Api {
  @observable public repos: Repo[] = [];
  @observable public totalCount: number = 0;

  public async searchRepos(query: string) {
    const { data } = await this.api.get('search/repositories', {
      params: {
        q: query,
        sort: 'stars',
        order: 'desc',
        per_page: 10,
        page: 1
      },
    });

    const { items, totalCount } = this.toDTO(SearchResults, data);
    this.repos = items.map((item) => new Repo().fromDto(item));
    this.totalCount = totalCount;
  }
}
