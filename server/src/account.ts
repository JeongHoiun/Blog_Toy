import { Request, Response, NextFunction, Router } from 'express';
import {connection} from '../app';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  connection.query('SELECT * from Users',(error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  connection.query(`INSERT INTO Users (id, password) VALUES ('${req.query.id}', '${req.query.password}')`, (error, rows) => {
    if (error) throw error;
    console.log('user Added', req.query.id);
    res.send('success')
  })
})

export default router;