/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.svg\\.react$': 'jest-svg-transformer',
    '^@/components/ui/AppStoreButtons$': '<rootDir>/src/components/__mocks__/AppStoreButtons.tsx'
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
        useESM: true,
        isolatedModules: true
      }
    ],
    '^.+\\.svg$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-leaflet|@react-leaflet)/)',
    '^.+\\.module\\.(css|sass|scss)$',
    '/node_modules/(?!@react-leaflet)'.replace(/\\/g, '/')
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
  moduleDirectories: ['node_modules', 'src']
};
