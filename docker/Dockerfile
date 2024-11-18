FROM node:22-bookworm-slim AS node

ENV HOME=/home/node
WORKDIR ${HOME}

# set our node env., either `development` or `production`
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# install global packages
# cf.) BestPractices.md
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#global-npm-dependencies
ENV NPM_CONFIG_PREFIX=${HOME}/.npm-global
ENV PATH=${HOME}/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest

# -----
# installed dependencies image
#
# this will cache them and speed up future builds
# -----
FROM ruby:3.3.6-slim-bullseye

# get node.js
COPY --from=node /usr/local/include/ /usr/local/include/
COPY --from=node /usr/local/lib/ /usr/local/lib/
COPY --from=node /usr/local/bin/ /usr/local/bin/

# ENV NODE_ENV=development
ENV WORK_DIR=/srv/jekyll
ENV PATH=${WORK_DIR}/node_modules/.bin:$PATH
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
ENV JEKYLL_VERSION=4.3.4
ENV BUNDLER_VERSION=2.5.11
ENV EXPOSED_PORT_DEFAULT=4000
ENV EXPOSED_PORT_LIVERELOAD=35729

# Set working directory
WORKDIR ${WORK_DIR}

# Packages:
#   - curl: for checking APIs in local dev. env.
#   - git: for watch mode in Jest
#   - tini: avoid running node.js process as PID 1
#   - libssl-dev: avoid err.: ‘writev’ was not declared in this scope; did you mean ‘write’?
#   - libc6-dev:  avoid err.: ‘writev’ was not declared in this scope; did you mean ‘write’?
#   - vim: for editing inside container
RUN apt-get update && apt-get install -y \
    curl \
    git \
    tini \
    libssl-dev \
    libc6-dev \
    build-essential \
    vim \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Jekyll
RUN gem install \
  bundler:${BUNDLER_VERSION} \
  jekyll:${JEKYLL_VERSION}

# set yarn AS v4.x
# reset symlinks
RUN corepack disable && corepack enable

RUN yarn set version stable

RUN yarn install \
  && yarn cache clean --all

# Expose the Jekyll ports
EXPOSE ${EXPOSED_PORT_DEFAULT} ${EXPOSED_PORT_LIVERELOAD}

# Set default command for Jekyll
# CMD ["jekyll", "serve", "--host", "0.0.0.0"]
CMD ["/bin/bash"]

