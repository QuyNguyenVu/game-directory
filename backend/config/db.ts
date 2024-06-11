import mysql, {Connection} from 'mysql';

const connection: Connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(function(err: any) {
  if (err) throw err;
});

export default connection;
