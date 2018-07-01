module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": {"var": 2, "let": 2, "const": 3},
      "MemberExpression": 1,
      "FunctionDeclaration": {"body": 1, "parameters": 2},
      "CallExpression": {"arguments": "first"},
      "ArrayExpression": "first",
      "ObjectExpression": "first",
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false
    }]
  }
};