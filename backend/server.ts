import "dotenv/config";
import express, {Express} from 'express';
import router from './routes/Api.routes';
import bodyParser from 'body-parser';

const app: Express = express();

const port: string = process.env.SERVER_PORT || '3000';
app.listen(port, () => {
	console.log('API server started on: ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
