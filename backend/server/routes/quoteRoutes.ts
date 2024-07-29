import { Router } from 'express';
import { getRandomQuote, quoteValidator } from 'controllers';

const quoteRouter = Router();

quoteRouter.get(
  '/random', 
  quoteValidator(),
  getRandomQuote,
);

export default quoteRouter;
