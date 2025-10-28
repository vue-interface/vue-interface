# Vue Interface

This is a monorepo for the [components](/docs/components) of [Vue Interface](https://github.com/vue-interface). Components are organized  in packages. The purpose of this monorepo is to provide a convenient and efficient way to develop and maintain UI components that are dependent on each other without relying on symlinks and other hacks that provide less than optimal development experiences. The goal is provide a collection of CLI tools so you can develop, version and publish for individual packages all from the root of the repo.

## Developing

To start developing in the mono repo run the following commands. `pnpm install` should be ran the first time, after anything package.json updates or when adding another submodule.

```bash
pnpm install
pnpm dev
```

## Versioning

Each package is independently versioned using strict [semantic versioning](https://semver.org/). The monorepo should import the packages with the stable versions. If a package introduces a breaking change, a major version should be made on the monorepo. The versions of the monorepo and packages are independent.

```bash
pnpm version
pnpm version --filter=@vue-interface/input-field
pnpm version --filter=@vue-interface/input-field...
pnpm version --filter=@vue-interface/input-field^...
```

## Publishing

The monorepo makes it easy to publish changes into NPM. Ensure the following exists in the workspace in `.github/workflows/build.yaml` and Github actions will do the rest. Any commit with a version tag (for example `v1.0.0`) will be published in NPM. The `dist` should be ignored.

```yaml
name: Build
on:
  push:
    tags:
      - v*
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install Modules 🔌 
      run: npm install
    - name: Transpile Typescript 🪛 
      run: npm run build
    - name: Create Release 🪧
      id: create_release
      uses: actions/create-release@v1
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      with:
        tag_name: ${{ github.ref }}
        release_name: Release ${{ github.ref }}
        draft: false
        prerelease: false
    - name: Publish package on NPM 📦
      uses: JS-DevTools/npm-publish@v1
      with:
        token: ${{ secrets.NPM_TOKEN }}
```