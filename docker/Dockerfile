# -----
# Stage 1: Base statge wi/ Node.js
#
# cf.) BestPractices.md
# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#global-npm-dependencies
# -----
FROM node:22-bookworm-slim AS base

ENV HOME=/home/node
WORKDIR ${HOME}

# global npm configuration
ENV NPM_CONFIG_PREFIX=${HOME}/.npm-global
ENV PATH=${HOME}/.npm-global/bin:$PATH

RUN npm i --unsafe-perm --allow-root -g npm@latest

# -----
# Stage 2: Dependencies stage
#
# Install dependencies into temp directory.
# This will cache them and speed up future builds.
# -----
FROM ubuntu:noble-20240605 AS deps

# copy Node.js from base image
COPY --from=base /usr/local/include/ /usr/local/include/
COPY --from=base /usr/local/lib/ /usr/local/lib/
COPY --from=base /usr/local/bin/ /usr/local/bin/

# ARGs to receive build-time variables
ARG WORK_DIR
ENV WORK_DIR=${WORK_DIR:-/app}
WORKDIR ${WORK_DIR}

# setup Node.js environment
ENV NODE_ENV=${NODE_ENV:-production}

# enable corepack for yarn v4.x
RUN corepack disable && corepack enable

# copy package files
COPY package*.json yarn*.lock .yarnrc.yml ./

# set yarn v4.x and install dependencies
#
# Use `nodeLinker` option to force traditional node_modules structure in case `.yarnrc.yml doe not exist.
# It enable Stage 3. to copy node_modules from this stage.
#
# - `nodeLinker`: force traditional node_modules structure
RUN yarn set version stable \
  # && yarn config set nodeLinker node-modules \
  && yarn install \
  && yarn cache clean --all

# -----
# Stage 3: Development stage
# -----
FROM ubuntu:noble-20240605 AS development

# copy Node.js from base image
COPY --from=base /usr/local/include/ /usr/local/include/
COPY --from=base /usr/local/lib/ /usr/local/lib/
COPY --from=base /usr/local/bin/ /usr/local/bin/

# ARGs to receive build-time variables
#
# - default port for node.js: 19006
# - test ports for debugging: 19001, 19002
ARG WORK_DIR
ENV WORK_DIR=${WORK_DIR:-/app}
WORKDIR ${WORK_DIR}

ARG PORT
ENV PORT=${port:-4321}
EXPOSE ${PORT}

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV:-development}

# setup other environment variables
ENV PATH=${WORK_DIR}/node_modules/.bin:$PATH
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

# Install system dependencies
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

# setup user
#
# - create node user and group
# - create app dir
# - switch to `node` user
RUN groupadd --gid 2000 node \
    && useradd --uid 2000 --gid node --shell /bin/bash --create-home node \
    && mkdir -p ${WORK_DIR} \
    && chown -R node:node ${WORK_DIR}

# - enable corepack for yarn v4.x
# - set yarn v4.x
RUN corepack disable \
  && corepack enable \
  && yarn set version stable

# switch to node user
USER node

# copy node_modules from deps stage
COPY --from=deps --chown=node:node ${WORK_DIR}/node_modules ${WORK_DIR}/node_modules
COPY --from=deps --chown=node:node ${WORK_DIR}/.yarn ${WORK_DIR}/.yarn

# copy project files
COPY --chown=node:node . .

# ENTRYPOINT ["/usr/bin/tini", "--"]

