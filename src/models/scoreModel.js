import mongoose from 'mongoose';

const scoreSchma = new mongoose.Schema({
  points: Number,
  seconds: Number,
});

const Score = mongoose.model('Score', scoreSchma);

export default Score;
