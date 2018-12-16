import { Expose, Type } from 'class-transformer';
import { Repo } from './repo.dto';

export class SearchResults {
  @Expose({ name: 'total_count' })
  public totalCount: number = 0;

  @Expose()
  @Type(() => Repo)
  public items: Repo[] = [];
}
