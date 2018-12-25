import { publicConfig } from '../publicConfig';

describe('public config test suite', () => {
  test('get config without key', () => {
    const config = publicConfig();
    expect(config).toBeDefined();
  });

  test('get config without key', () => {
    const config = publicConfig('apis');
    expect(config).toBeDefined();
  });
});
