import express from 'express';
import Score from '../models/scoreModel.js';

const router = new express.Router();

router.get('/best-score', async (req, res) => {
  try {
    const bestScore = await Score.find({})
      .sort({ points: 'desc', seconds: 'asc' })
      .limit(1);

    res.send(bestScore[0]);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post('/best-score', async (req, res) => {
  const score = new Score(req.body);

  try {
    await score.save();
    res.send('ok');
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
