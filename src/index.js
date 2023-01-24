import express from 'express';
import cors from 'cors';
import http from 'http';
import socket from './socket/socket.js';
import scoreRouter from './routers/scoreRouter.js';
import 'dotenv/config';
import './db/mongoose.js';

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(scoreRouter);
app.use('/test', (req, res) => res.send('ok'));

socket(server);

server.listen(port, () => console.log('server in running on port:', port));
