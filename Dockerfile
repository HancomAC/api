FROM node:18-alpine

RUN npm install pnpm -g
COPY .dockerignore .gitignore package.json pnpm-lock.yaml tsconfig.json /HAC/
WORKDIR /HAC
RUN pnpm install
COPY build/index.js /HAC/build/index.js


ENTRYPOINT ["node", "/HAC/build/index.js"]
