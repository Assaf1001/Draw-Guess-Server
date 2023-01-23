import express from 'express';
import cors from 'cors';
import http from 'http';
import socket from './socket/socket.js';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use('/test', (req, res) => res.send('ok'));

socket(server);

server.listen(port, () => console.log('server in running on port:', port));
