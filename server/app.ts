import express, { Request, Response, NextFunction } from 'express';
import mysql from 'mysql'
import { mysqlConn } from './config/database.js';
import account from './src/account';

export const connection = mysql.createConnection(mysqlConn);

const app = express();

app.use('/account', account);

app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});

export default app;