const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = compat.extends(
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'next/core-web-vitals'
);
