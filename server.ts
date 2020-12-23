import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

const chalk = require('chalk');
const gateway = new ApolloGateway({
    serviceList: [
      { name: 'Student', url: 'http://localhost:3000/graphql' },
    ]
});

const server = new ApolloServer({ 
    gateway, 
    subscriptions: false 
});

const app = express();

app.post('/sync', (request, response) => {

  console.log(chalk.yellow('Attempting to refresh remote endpoint'));
  gateway.load();
  response.sendStatus(200);

});

server.applyMiddleware({ app, path: '/' });
const portConfig = 80;
console.log(chalk.blue(`\n\nServer running on port: ${portConfig}...\n\n`));
app.listen({port: portConfig});