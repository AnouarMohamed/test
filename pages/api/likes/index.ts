import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { connectWithDB } from '../../../backend/config/helpers';
import {
  addNewLike,
  getAllLikes,
} from '../../../backend/controllers/likesController';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });
const isDatabaseConfigured = Boolean(process.env.DB_URI);

if (isDatabaseConfigured) {
  connectWithDB();
}

handler
  .get((req, res) => {
    if (!isDatabaseConfigured) {
      res.status(200).json({ success: true, totalLikes: 0, likes: [] });
      return;
    }

    return getAllLikes(req, res);
  })
  .post((req, res) => {
    if (!isDatabaseConfigured) {
      res.status(200).json({ success: true, newLike: null });
      return;
    }

    return addNewLike(req, res);
  });

export default handler;
