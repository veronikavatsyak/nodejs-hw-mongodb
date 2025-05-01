import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandlers.js';
import contactsRouter from './routers/contacts.js';
import authRouter from './routers/auth.js';
import cookieParser from 'cookie-parser';
const PORT = Number(getEnvVar('PORT', '3000'));

// if (isNaN(PORT) || PORT < 0 || PORT >= 65536) {
//   throw new Error(`Invalid port value: ${PORT}`);
// }

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use('/auth', authRouter);
  app.use('/contacts', contactsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
