/* tslint:disable:max-classes-per-file */
import { Expose, Type } from 'class-transformer';
import { existing } from '../helpers';
import { Transit } from '../transit';

class DtoMock {
  @Expose()
  public name: string = '';

  @Expose()
  @Type(() => Date)
  public date: Date = new Date();

  @Expose()
  public unexpected: number = 0;
}

class TransitTest extends Transit {
  @existing() public name?: string;
  @existing() public date?: Date;

  public convert(data: any) {
    return this.toDTO(DtoMock, data);
  }

  public fill(data: any) {
    this.fillSelf(data);
    return this.asPlain();
  }
}

class TransitWithDataMock extends Transit {
  public name: string = 'some data';
  public date: Date = new Date();
  public other: number = 1;
}

describe('Transit class suite', () => {
  test('transform plain data toDTO', () => {
    const instance = new TransitTest();
    const mockDate = new Date();
    const rawData = { name: 'test name', date: mockDate, other: 1 };
    const result = instance.convert(rawData);
    expect(result).toEqual({ name: 'test name', date: mockDate });
    expect(result).not.toHaveProperty('other');
  });

  test('transform array data toDTO', () => {
    const instance = new TransitTest();
    const mockDate = new Date();
    const rawData1 = { name: 'test name', date: mockDate, other: 1 };
    const rawData2 = { name: 'second name', date: mockDate, other: 2 };
    const result = instance.convert([rawData1, rawData2]);

    const expectedData1 = { name: 'test name', date: mockDate };
    const expectedData2 = { name: 'second name', date: mockDate };
    expect(result).toContainEqual(expectedData1);
    expect(result).toContainEqual(expectedData2);
  });

  test('transform another transit class toDTO', () => {
    const instance = new TransitTest();
    const mockDate = new Date();
    const mockInstance = new TransitWithDataMock();
    mockInstance.date = mockDate;
    const result = instance.convert(mockInstance);

    expect(result).toEqual({ name: 'some data', date: mockDate });
  });

  test('transform self to DTO', () => {
    const instance = new TransitTest();
    const mockDate = new Date();
    instance.date = mockDate;
    instance.name = 'expected';
    const result = instance.convert(undefined);

    expect(result).toEqual({ name: 'expected', date: mockDate });
  });

  test('fill self by data from DTO', () => {
    const instance = new TransitTest();
    const mockDate = new Date();
    const result = instance.fill(instance.convert({ name: 'some data', date: mockDate, unexpected: 1 }));

    expect(result).toMatchObject({ name: 'some data', date: mockDate });
  });
});
