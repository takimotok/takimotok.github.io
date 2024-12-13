---
aliases: ["Kengo's Resume"]
tags: ['resume', '']
created_at: 2024-12-03
updated_at:
---

# 📓 Kengo's Resume

Kengo's Resume.

## 🚀 Project Structure

This resume uses [Astro](https://astro.build/).

Here's the folders and files:

<details>
<summary>Click to expand</summary>

```txt
./
├── .astro
│   ├── collections/
│   ├── content-assets.mjs
│   ├── content-modules.mjs
│   ├── data-store.json
│   ├── settings.json
│   └── types.d.ts
├── .github
│   └── workflows/
├── .vscode
│   ├── extensions.json
│   └── launch.json
├── docker
│   └── Dockerfile
├── public
│   └── favicon.svg
├── src
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── .dockerignore
├── .env
├── .env.example
├── .env.local
├── .gitignore
├── .mise.toml
├── .nojekyll
├── .prettierignore
├── .prettierrc.json
├── .yarnrc.yml
├── LICENSE
├── README.md
├── astro.config.mjs
├── biome.jsonc
├── compose.yml
├── package.json
├── tsconfig.json
└── yarn.lock
```

</details>

##  Setup local dev. env

### Prerequisites

`node_modules` dir. is isolated between host machine (e.g.: macOS) and docker container.  
Make sure set the same versions of `yarn` and `node` as the files below says.

cf.)  
- [package.json](./package.json)
- [Dockerfile](./docker/Dockerfile)

```sh
# on host machine (e.g.: macOS)
❯ yarn -v
4.5.2

❯ node -v
v22.11.0
```

### Setup

```sh
# on host machine

$ git clone git@github.com:takimotok/takimotok.github.io.git

$ cd takimotok.github.io.git

$ docker compose down -v

$ docker compose build --no-cache

$ docker compose up -d

# start local server
$ docker compose exec app /bin/bash yarn dev
```

In case make IDE read binaries from `node_modules`:

```sh
# on host machine

$ rm -rf node_modules .yarn

$ yarn install
```

##  Commands

For local dev. env., we can run the commands below from a terminal:

| Command                      | Action                                             |
| :--------------------------- | :------------------------------------------------- |
| `yarn install`               | Installs dependencies                              |
| `yarn run dev`               | Starts local dev server at `localhost:4321`        |
| `yarn run build`             | Build your production site to `./dist/`            |
| `yarn run preview`           | Preview your build locally, before deploying       |
| `yarn run astro ...`         | Run CLI commands like `astro add`, `astro check`   |
| `yarn run astro -- --help`   | Get help using the Astro CLI                       |

