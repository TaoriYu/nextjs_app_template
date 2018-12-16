import { observable } from 'mobx';
import { Transit } from '../api/transit';
import { RepoDto } from './dto';

export class Repo extends Transit {
  @observable public id: number = 0;
  @observable public name: string = '';
  @observable public fullName: string = '';
  @observable public htmlUrl: string = '';
  @observable public createdAt: Date = new Date();
  @observable public pushedAt: Date = new Date();

  public fromDto(dto: RepoDto): this {
    this.fillSelf(dto);
    return this;
  }
}
