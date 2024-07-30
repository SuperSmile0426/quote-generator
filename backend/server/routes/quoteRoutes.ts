import { Router } from 'express';
import { getRandomQuote, quoteValidator } from 'controllers';
import { checkAuth } from 'utils';

const quoteRouter = Router();

quoteRouter.get(
  '/random', 
  checkAuth,
  quoteValidator(),
  getRandomQuote,
);

export default quoteRouter;
