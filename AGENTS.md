# Project Setup Documentation

## Overview

This is a Next.js 16 application with TypeScript, Tailwind CSS v4, and shadcn/ui, using a `src/` folder structure.

## Tech Stack

- **Next.js** 16.1.7 (App Router)
- **TypeScript** 5.9.3
- **Tailwind CSS** 4.2.1
- **shadcn/ui** 4.0.8 (style: "radix-maia")
- **Biome** 2.4.7 (linting & formatting)

## Project Structure

```
teams-web/
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/    # React components
│   │   ├── ui/        # shadcn/ui components
│   │   └── theme-provider.tsx
│   ├── lib/           # Utilities
│   │   └── utils.ts
│   └── hooks/         # Custom React hooks
├── biome.json         # Biome configuration
├── components.json    # shadcn/ui configuration
├── tsconfig.json      # TypeScript configuration
├── next.config.mjs    # Next.js configuration
└── package.json      # Dependencies and scripts
```

## Setup Steps

### 1. Moved to src/ Folder

Moved `app/`, `components/`, `lib/`, and `hooks/` into a `src/` directory. Updated `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### 2. Installed Biome

```bash
pnpm add -D @biomejs/biome
```

### 3. Configured biome.json

Located at project root with the following settings:

- **Formatter**: 2 spaces indentation, double quotes, always semicolons
- **Linter**: Enabled with recommended rules
- **Tailwind CSS**: Parser enabled for CSS files
- **VCS**: Git integration enabled to use `.gitignore`

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.7/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "semicolons": "always"
    }
  },
  "css": {
    "parser": {
      "tailwindDirectives": true
    }
  }
}
```

### 4. Updated package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "biome lint .",
    "format": "biome format --write .",
    "format:check": "biome format .",
    "typecheck": "tsc --noEmit"
  }
}
```

### 5. VS Code Integration

Created `.vscode/settings.json` for automatic formatting on save:

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
    "source.fixAll": "explicit"
  }
}
```

**Required**: Install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

## Commands

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `pnpm dev`          | Start development server        |
| `pnpm build`        | Build for production            |
| `pnpm start`        | Start production server         |
| `pnpm lint`         | Run Biome linter                |
| `pnpm format`       | Format code with Biome          |
| `pnpm format:check` | Check formatting without fixing |
| `pnpm typecheck`    | Run TypeScript type checking    |

## Notes

- The `.next` and `node_modules` directories are ignored by Biome via VCS (gitignore) integration.
- Tailwind CSS v4 uses `@import "tailwindcss"` in `globals.css` instead of `@tailwind` directives.
- shadcn/ui components are located in `src/components/ui/`.
