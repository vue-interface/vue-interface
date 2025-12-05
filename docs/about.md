# Vue Interface

This is a monorepo for the [components](/docs/packages) of [Vue Interface](https://github.com/vue-interface). Components are organized  in packages. The purpose of this monorepo is to provide a convenient and efficient way to develop and maintain UI components that are dependent on each other without relying on symlinks and other hacks that provide less than optimal development experiences. The goal is provide a collection of CLI tools so you can develop, version and publish for individual packages.

## Developing

To start developing in the mono repo run the following commands. `pnpm install` should be ran the first time, after anything package.json updates or when adding another submodule.

```bash
pnpm install
pnpm dev
```

## Versioning

Each package is independently versioned using strict [semantic versioning](https://semver.org/). The monorepo uses [Changesets](https://akinoccc.github.io/changesets/) to manage versions and changelogs for all packages independently. When a package introduces a change, only that package receives a version bump and other packages remain unaffected.

### Creating a Changeset
After making changes to one or more packages, create a changeset to document what changed:

::: code-group
```bash [pnpm]
pnpm changeset
```

```bash [yarn]
yarn changeset
```
:::

This interactive command will:

1. Ask which packages changed - Select the packages you modified (use spacebar to select, enter to confirm)
2. Ask for version bump type - Choose the semantic version bump for each package:
    - major - Breaking changes (e.g., removing a prop, changing API)
    - minor - New features (e.g., adding a new prop, new functionality)
    - patch - Bug fixes (e.g., fixing a rendering issue)
3. Ask for a summary - Write a brief description of the change (this appears in the changelog)

### Example CLI Workflow

```bash
🦋 Which packages would you like to include?
  ◉ @vue-interface/input-field ← Select this package (press space)
  ◯ @vue-interface/btn
  ◯ @vue-interface/form-control
 
🦋 What kind of change is this for @vue-interface/input-field?
  major (breaking change)
  minor (new feature)
  ❯ patch (bug fix) ← Select this option (press space)

🦋 Please enter a summary:
  Fix styling error when input is disabled
```

The Changesets CLI then generates a markdown file in the .changeset/ directory with a random name (e.g., cool-lions-dance.md).

## Publishing

The monorepo uses GitHub Actions with Changesets to automatically publish packages to npm. The workflow is fully automated and handles versioning, changelog generation, and publishing. Ensure the following exists in the workspace in `.github/workflows/release.yaml` and Github actions will do the rest.

```yaml
release:
  name: Release
  runs-on: ubuntu-latest
  steps:
    - name: Checkout Repo
      uses: actions/checkout@v4
      with:
        fetch-depth: 0
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 22
        cache: pnpm
    - name: Install Dependencies 🔌
      run: pnpm install --frozen-lockfile
    - name: Run Tests
      run: pnpm vitest run --coverage
    - name: Build Packages
      run: pnpm build
    - name: Create Release Pull Request or Publish to npm 🪧
      id: changesets
      uses: changesets/action@v1
      with:
        publish: pnpm release 
        version: pnpm version  
        commit: "chore: version bump from changesets"
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```