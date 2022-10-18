import { Request, Response, NextFunction, Router } from 'express';
import app, {connection} from '../app';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  connection.query('SELECT * from Users',(error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

export default router;