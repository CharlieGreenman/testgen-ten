{
  "extends": ["../../../../../.eslintrc.json"],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": [
        "plugin:@nx/angular",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "testgen-ten",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "testgen-ten",
            "style": "kebab-case"
          }
        ]
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@nx/angular-template"],
      "rules": {}
    }
  ]
}
