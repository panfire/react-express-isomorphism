module.exports = {
  extends: 'standard',
  parser: 'babel-eslint',
  plugins: [
    'react'
  ],
  "globals": {
    "$": true,
    "layer": true
  },
  env: {
    "browser": true,
    "node": true
  },
  rules: {
    "space-before-function-paren": "off",
    "no-unused-vars": "off"
  }
};
