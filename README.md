@dmkishi/stylelint-config
================================================================================
DM Kishi's custom [Stylelint](https://stylelint.io) config. It extends the
following configs with some customizations:

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-config-clean-order](https://github.com/kutsan/stylelint-config-clean-order)

Install
--------------------------------------------------------------------------------
```sh
pnpm add --save-dev stylelint @dmkishi/stylelint-config
```

### stylelint.config.mjs
```js
export default {
  extends: ['@dmkishi/stylelint-config'],
};
```

Develop
--------------------------------------------------------------------------------
### Validation
The validation script `pnpm validate` resolves the full config against a fixture
(proving `extends` and plugin resolution work) and lints the fixture, which must
pass clean.

Changelog
--------------------------------------------------------------------------------
### v0.0.0 (2026-7-10)
- Initial release.
