import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { connectWithDB } from '../../../backend/config/helpers';
import { onError } from '../../../middleware/onError';
import {
  getAllApprovedComments,
  postNewComment,
} from '../../../backend/controllers/commentsController';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });
const isDatabaseConfigured = Boolean(process.env.DB_URI);

if (isDatabaseConfigured) {
  connectWithDB();
}

handler
  .get((req, res) => {
    if (!isDatabaseConfigured) {
      res.status(200).json({ success: true, total: 0, comments: [] });
      return;
    }

    return getAllApprovedComments(req, res);
  })
  .post((req, res) => {
    if (!isDatabaseConfigured) {
      res.status(200).json({ success: true, newComment: null });
      return;
    }

    return postNewComment(req, res);
  });

export default handler;
