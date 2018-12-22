module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./stores/provider/container.ts'],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};
