import express from 'express';
import cors from 'cors';
import compression from 'compression';
import http from 'http';
import {SummaryRouter} from './routes';

const app = express();
app.use(express.static('public'));
app.use(cors({credentials: true, methods: '*'}));
app.use(compression());

/* Server */
const PORT = 5002;
const server = http.createServer(app);
server.listen(PORT);
console.log(`Server Listening on port ${PORT}.`);

/* Routes */
const root = 'backend';
app.use(`/${root}/summary`, SummaryRouter);
