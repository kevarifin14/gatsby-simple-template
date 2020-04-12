module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    settings: {
      "import/resolver": {
        "node": {
          "moduleDirectory": ["node_modules", "src"]
        }
      }
    },
    plugins: [
      'react',
    ],
    rules: {
      "react/prop-types": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/jsx-props-no-spreading": 0,
      "react/no-danger": 0,
    },
  };
