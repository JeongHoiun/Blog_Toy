import express, { Request, Response, NextFunction } from 'express';
import mysql from 'mysql'
import { mysqlConn } from './config/database.js';

const connection = mysql.createConnection(mysqlConn);


const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  connection.query('SELECT * from Users',(error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});
