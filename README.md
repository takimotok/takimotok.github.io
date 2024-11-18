# kimotok.github.io

my page

## Environment

- ruby: 3.3.6
- node: 22.11.0
- yarn: 4.5.1
- jekyll: 4.3.4

```sh
$ bundle exec jekyll -v

jekyll 4.3.4
```

## Usage

Before executing these commands below, see `command` section in `compose.yml`.

Set `PLATFORM` to your CPU architecture.  
(e.g.) `linux/arm64`

```sh
$ cp .env.local .env
```

And then, install ruby and node packages.

```sh
# install ruby packages
$ bundle install

# install node packages
$ yarn set version stable

$ yarn -v
4.5.1

$ yarn install
```

Start local server.

```sh
$ bundle exec jekyll build

$ bundle exec jekyll serve --livereload
```

Access to `http://localhost:4000/`.
