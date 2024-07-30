import { Request, Response } from "express";
import { query } from "express-validator";
import httpStatus from "http-status";

import { quoteService } from "services";
import { errorHandlerWrapper } from "utils";

export const quoteValidator = () => {
  return [
    query("limit")
      .optional(),
    query("maxLength")
      .optional()
      .isInt({ min: 1 })
      .withMessage("maxLength must be a positive integer"),
    query("tags").optional().isString().withMessage("tags must be a string"),
    query("author")
      .optional()
      .isString()
      .withMessage("author must be a string"),
  ];
};

type Params = unknown;
type ResBody = unknown;
type ReqBody = unknown;
type ReqQuery = {
  limit?: number;
  minLength?: number;
  maxLength?: number;
  tags?: string;
  author?: string;
};

export const getRandomQuoteHandler = async (
  req: Request<Params, ResBody, ReqBody, ReqQuery>,
  res: Response
) => {

  let { limit = 1, minLength, maxLength, tags, author } = req.query;

  if (isNaN(limit) || limit < 1) {
    limit = 1;
  } else if (limit > 50) {
    limit = 50;
  }
  
  const quote = await quoteService.fetchRandomQuote({
    limit,
    minLength,
    maxLength,
    tags,
    author,
  });

  res.status(httpStatus.OK).json(quote);
};

export const getRandomQuote = errorHandlerWrapper(getRandomQuoteHandler);
