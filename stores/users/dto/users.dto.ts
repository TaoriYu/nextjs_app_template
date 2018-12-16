import { Expose, Type } from 'class-transformer';
import { UserDto } from './user.dto';

export class UsersDto {
  @Expose({ name: 'total_count' })
  public totalCount: number = 0;

  @Expose()
  @Type(() => UserDto)
  public items: UserDto[] = [];
}
