import { observable } from 'mobx';
import { Transit } from '../api/transit';
import { UserDto } from './dto';

export class User extends Transit {
  @observable public login: string = '';
  @observable public avatarUrl: string = '';
  @observable public url: string = '';

  public fromDTO(dto: UserDto) {
    this.fillSelf(dto);
    return this;
  }
}
