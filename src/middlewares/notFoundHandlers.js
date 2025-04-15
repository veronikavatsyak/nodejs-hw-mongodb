import createHttpError from 'http-errors';
export const notFoundHandler = (req, res, next) => {
  next(createHttpError(404, 'Rogit ute not found'));
};
