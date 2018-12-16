import { Expose, Type } from 'class-transformer';

export class Repo {
  @Expose()
  public id: number = 0;

  @Expose()
  public name: string = '';

  @Expose({ name: 'full_name' })
  public fullName: string = '';

  @Expose({ name: 'html_url' })
  public htmlUrl: string = '';

  @Expose({ name: 'created_at' })
  @Type(() => Date)
  public createdAt: Date = new Date();

  @Expose({ name: 'pushed_at' })
  @Type(() => Date)
  public pushedAt: Date = new Date();
}
