# Contributing to webext-popup-router

Thank you for your interest in contributing. This guide covers how to report issues and submit changes to the project.

## Reporting Issues

Before creating a new issue, please search existing issues to avoid duplicates.

When reporting a bug, include:
- A clear description of the problem
- Steps to reproduce the issue
- Your environment details (Node version, browser, OS)
- Any relevant error messages or stack traces

When requesting a feature, describe:
- The use case you are trying to address
- Why this feature would be valuable
- Any alternative solutions you have considered

## Development Workflow

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch from main
4. Make your changes
5. Test that the build passes
6. Commit with a clear message
7. Push to your fork
8. Submit a pull request

### Setting Up Development Environment

```bash
npm install
npm run build
```

### Building

```bash
npm run build
```

This compiles the TypeScript source to JavaScript.

## Code Style

- Use TypeScript for all new code
- Follow the existing code patterns in the project
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions focused and small

## Testing

Ensure the build passes before submitting changes:

```bash
npm run build
```

## License

By contributing to webext-popup-router, you agree that your contributions will be licensed under the MIT License.
