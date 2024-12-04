# -----
# base image
# -----
FROM node:22-bookworm-slim AS base

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
# install image
#
# install dependencies into temp directory
# this will cache them and speed up future builds
# -----
FROM ubuntu:noble-20240605 AS install

# get node.js
COPY --from=base /usr/local/include/ /usr/local/include/
COPY --from=base /usr/local/lib/ /usr/local/lib/
COPY --from=base /usr/local/bin/ /usr/local/bin/

ENV NODE_ENV=development
ENV WORK_DIR=/app
ENV PATH=${WORK_DIR}/node_modules/.bin:$PATH
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR ${WORK_DIR}

# Packages:
#   - curl: for checking APIs in local dev. env.
#   - git: for watch mode in Jest
#   - tini: avoid running node.js process as PID 1
#   - vim: for editing inside container
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    curl \
    git \
    tini \
    vim \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# reset symlinks
RUN corepack disable && corepack enable

# create node user and group, then create app dir
RUN groupadd --gid 2000 node \
    && useradd --uid 2000 --gid node --shell /bin/bash --create-home node \
    && mkdir -p ${WORK_DIR} \
    && chown -R node:node ${WORK_DIR}

USER node

# -----
# prod. image
# -----
FROM install AS release
COPY --chown=node:node ./package*.json ./yarn*.lock ${WORK_DIR}/
ENV NODE_ENV=production

# default port for node.js: 19006
# test ports for debugging: 19001, 19002
ENV PORT=4321
EXPOSE ${PORT}

# set yarn v4.x
RUN yarn set version stable

RUN yarn install \
  && yarn cache clean --all

ENTRYPOINT ["/usr/bin/tini", "--"]

