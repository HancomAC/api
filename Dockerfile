FROM node:18-alpine

COPY build/index.js /HAC/build/index.js
COPY .dockerignore .gitignore package.json pnpm-lock.yaml tsconfig.json /HAC/
WORKDIR /HAC
RUN npm install pnpm -g
RUN pnpm install

ENTRYPOINT ["node", "/HAC/index.js"]
