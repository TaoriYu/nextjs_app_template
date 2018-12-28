import { Expose, Type } from 'class-transformer';
import { RepoDto } from './repo.dto';

export class SearchResults {
  @Expose({ name: 'total_count' })
  public totalCount: number = 0;

  @Expose()
  @Type(() => RepoDto)
  public items: RepoDto[] = [];
}
