# :gear: `setup-gh` ![](https://github.com/github-developer/setup-gh/workflows/Tests/badge.svg)
> An example action, demonstrating how CLI authors may develop actions that allow setup their of CLIs on GitHub's  hosted runners, using JavaScript

## About
This action, which is intended _for demonstration use only_, sets up the GitHub CLI, [`gh`](https://github.com/cli/cli), on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `gh` CLI on the runner environment.

## Usage

Setup the `gh` CLI:

```yaml
steps:
- uses: github-developer/setup-gh@v1
```

A specific version of the `gh` CLI can be installed:

```yaml
steps:
- uses: github-developer/setup-gh@v1
  with:
    version:
      1.1.0
```

## Inputs
The actions supports the following inputs:

- `version`: The version of `gh` to install, defaulting to `1.2.0`

## Further reading
For information on Creating a JavaScript action, read [the docs](https://docs.github.com/actions/creating-actions/creating-a-javascript-action).

## License
[MIT](LICENSE).
