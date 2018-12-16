import { action, observable } from 'mobx';
import { Api } from '../api';
import { makeStore } from '../provider/MakeStore';
import { UsersDto } from './dto';
import { User } from './user';

@makeStore(UsersStore)
export class UsersStore extends Api {
  @observable public users: User[] = [];
  @observable public totalCount: number = 0;

  @action public async searchUsers(query: string) {
    const { data } = await this.api.get('/search/users', {
      params: {
        q: query,
        order: 'desc'
      }
    });

    this.users = this.toDTO(UsersDto, data).items.map((item) => new User().fromDTO(item));
  }
}
