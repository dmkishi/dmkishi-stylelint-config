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
  rules: {
    // Add custom rules here
  },
};
```

### .stylelintignore
[Ignore files](https://stylelint.io/user-guide/ignore-code/#files-entirely)
using `.gitignore` syntax.
```text
dist/
vendor/**/*.css
```

Develop
--------------------------------------------------------------------------------
### Validate
The validation script `pnpm validate` resolves the full config against a fixture
(proving `extends` and plugin resolution work) and lints the fixture, which must
pass clean.

### Test in an External Project
To try new features in a real project before publishing, use `pnpm link` to
symlink this package into the consuming project's `node_modules`. **Note**:
`pnpm --version` must be 11 or greater.

```sh
# In an external project, enter the following with a relative or absolute path
# to this repo. The external project will then resolve `@dmkishi/stylelint-config`
# to your local check out, so edits here are picked up immediately.
pnpm link ~/projects/@dmkishi-stylelint-config

# When finished, remove the link and restore the original package.
pnpm unlink @dmkishi/stylelint-config
pnpm install
```

Changelog
--------------------------------------------------------------------------------
### v0.0.0 (2026-7-10)
- Initial release.
