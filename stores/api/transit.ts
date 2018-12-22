import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { OmitDif } from '../../types/helpers';
import { provide } from '../provider/provide';

@provide(Transit)
export class Transit {

  /**
   * Transform object to DTO, if not data provided transform this to DTO
   * Notice:
   *  It's grab all keys from DTO and then require them from data argument or this
   * @param {ClassType<D>} dto
   * @returns {D}
   */
  protected toDTO<D>(dto: ClassType<D>): D;
  protected toDTO<D, T extends any[]>(dto: ClassType<D>, data: T[]): D[];
  protected toDTO<D, T extends object>(dto: ClassType<D>, data: T): D;
  protected toDTO<D, T extends Transit>(dto: ClassType<D>, data?: T | T[]): D | D[] {
    if (Array.isArray(data)) {
      return plainToClass<D, object[]>(dto, data, { strategy: 'excludeAll' });
    } else if (data instanceof Transit) {
      return plainToClass<D, object>(dto, data.asPlain(), { strategy: 'excludeAll' });
    } else if (data) {
      return plainToClass<D, T>(dto, data, { strategy: 'excludeAll' });
    } else {
      return plainToClass<D, this>(dto, this, { strategy: 'excludeAll' });
    }
  }

  // TODO: Fix ANY
  /**
   * Fill any class that extends Transit with data. Key declaration must exist
   * @param {D} dto
   */
  protected fillSelf<D extends object>(this: any, dto: D): void {
    for (const key in dto) {
      if (key in this) {
        this[key] = dto[key] as unknown as OmitDif<this, D>;
      }
    }
  }

  /**
   * Transform class to plain object
   * @returns {Object}
   */
  protected asPlain() {
    return classToPlain(this);
  }
}
