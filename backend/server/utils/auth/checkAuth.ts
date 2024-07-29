import { Response } from 'express';
import httpStatus from 'http-status';


import { MESSAGES, REASON_CODES } from 'consts';

import { NotFoundError } from 'errors';


export const checkAuth = async (req: any, res: Response, next: Function) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if(token === "abcdefg"){
      next();
    } else {
      res.status(httpStatus.UNAUTHORIZED).json({
        message: MESSAGES.UNAUTHORIZED,
        reason: REASON_CODES.AUTH.UNAUTHORIZED,
      });
    }
    // const data = jwt.verify(token, JWT_TOKEN);

  } catch (error) {
    if (error instanceof NotFoundError) {
      res.status(error.errorCode).json({
        message: error.message,
        reason: error.reasonCode,
      });
    } else {
      res.status(httpStatus.UNAUTHORIZED).json({
        message: MESSAGES.UNAUTHORIZED,
        reason: REASON_CODES.AUTH.UNAUTHORIZED,
      });
    }
  }
};
