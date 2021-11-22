module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-recess-order'
  ],
  'rules': {
    'order/properties-alphabetical-order': null,
    'function-parentheses-space-inside': 'never-single-line',
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }],
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
    'scss/percent-placeholder-pattern': '^[a-z][a-zA-Z0-9]*$',
    'rule-empty-line-before': ['always', {
      ignore: 'after-comment',
    }],
    'selector-max-compound-selectors': [5, {}],
    'max-nesting-depth': [
      5,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes']
      }
    ]
  }
};
