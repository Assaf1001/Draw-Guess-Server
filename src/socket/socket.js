import { Server } from 'socket.io';
import { getUsers, addPlayer, removePlayer, isGameAvaliable } from './utils.js';

export default (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log('newConnection', socket.id);
    if (isGameAvaliable()) {
      addPlayer(socket.id);
      io.emit('getUsers', getUsers());
    } else {
      console.log('game-full');
    }

    socket.on('sendGameData', ({ socketId, word, paths, score }) => {
      socket.to(socketId).emit('recieveGameData', { word, paths, score });
    });

    socket.on('sendGameEnded', (socketId) => {
      socket.to(socketId).emit('recieveGameEnded');
    });

    socket.on('disconnect', () => {
      removePlayer(socket.id);
      io.emit('getUsers', getUsers());
    });
  });
};
