const users = { player1: null, player2: null };

export const getUsers = () => users;

export const addPlayer = (socketId) => {
  users.player1 === null
    ? (users.player1 = socketId)
    : (users.player2 = socketId);
};

export const removePlayer = (id) => {
  if (id == users.player1) {
    users.player1 = null;
  } else if (id == users.player2) {
    users.player2 = null;
  }
};

export const isGameAvaliable = () => !users.player1 || !users.player2;
