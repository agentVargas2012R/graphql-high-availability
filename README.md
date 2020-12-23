## Description

This sample app showcases the integration of different layers of the Nest, GraphQL and TypeOrm ecosystem. It contains a high availability federated/gateway configuration. 

## Responsibilities

This microservice acts as a high-availability gateway which contains a special endpoint used to sync the gateway across multiple services and changes.. 

## Architecture

See graphl-api draw.io diagram in related project. App.module.ts is the main entry point from the application. Use the modules files to discover each of the components declared.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Frameworks

The following frameworks are components of this demo project.

[TypeOrm](https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md) framework is used as a relational db mapping tool to interface with databases> is a specification used to interact with apis in a flexible and powerful way.

## License

 N/A
