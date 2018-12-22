---
to: <%= h.projectRoot %>/stores/<%= h.lcFirst(name) %>/dto/incoming<%= h.ucFirst(name) %>.dto.ts
---
import { Expose, Type } from 'class-transformer';

export class Incoming<%= h.ucFirst(name) %> {
  /** идентификатор */
  @Expose({ name: '_id' })
  public id: string = '';

  /** дата обновления */
  @Type(() => Date)
  public updatedAt: Date = new Date();

  /** дата создания */
  @Type(() => Date)
  public createdAt: Date = new Date();
}
