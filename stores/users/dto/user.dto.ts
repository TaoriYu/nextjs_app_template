import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  public login: string = '';

  @Expose({ name: 'avatar_url' })
  public avatarUrl: string = '';

  @Expose()
  public url: string = '';
}
