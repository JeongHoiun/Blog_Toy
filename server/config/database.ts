import mysql from 'mysql';

export const mysqlConn: mysql.ConnectionConfig = {
    host: '127.0.0.1',
    user: 'hoiun',
    port: 3306,
    password: '1234',
    database: 'my_db'
};
