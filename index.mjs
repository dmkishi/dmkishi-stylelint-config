import { propertyGroups } from 'stylelint-config-clean-order';

/**
 * @type {import('stylelint').Config}
 */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order',
  ],
  rules: {
    /**
     * Require an empty line before custom properties, except for the first one
     * in a block, and ignore the rule between consecutive custom properties so
     * variables can be grouped together without blank lines between them.
     */
    'custom-property-empty-line-before': ['always', {
      except: [
        'first-nested',
      ],
      ignore: [
        'after-custom-property',
      ],
    }],

    /**
     * Disable stylelint-config-standard's class naming convention so any style
     * (BEM, camelCase, CSS Modules, etc.) is allowed.
     */
    'selector-class-pattern': null,

    /**
     * Override stylelint-config-clean-order's `order/order`: place `@media`
     * blocks right after the element's own declarations (instead of last, after
     * nested rules), so media overrides stay grouped with what they override.
     */
    'order/order': [
      [
        { type: 'at-rule', name: 'import' },
        { type: 'at-rule', name: 'forward' },
        { type: 'at-rule', name: 'use' },
        'dollar-variables',
        'at-variables',
        'custom-properties',
        { type: 'at-rule', name: 'custom-media' },
        { type: 'at-rule', name: 'function' },
        { type: 'at-rule', name: 'mixin' },
        { type: 'at-rule', name: 'extend' },
        'declarations',
        { type: 'at-rule', name: 'media', hasBlock: true },
        { type: 'rule', selector: /^&::[\w-]+/, hasBlock: true },
        'rules',
      ],
      {
        severity: 'warning',
      },
    ],

    /**
     * Disable the empty-line enforcement that stylelint-config-clean-order adds,
     * i.e. blank lines are left to the author's discretion.
     */
    'declaration-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'order/properties-order': [
      propertyGroups.map((properties) => ({
        noEmptyLineBetween: true,
        emptyLineBefore: 'never', // Don't add empty lines between order groups.
        properties,
      })),
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};
