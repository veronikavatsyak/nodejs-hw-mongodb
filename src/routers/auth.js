import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserSchema,
  loginWithGoogleOAuthSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPassordSchema,
} from '../validation/auth.js';
import {
  getGoogleOAuthUrlController,
  loginUserController,
  loginWithGoogleController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetEmailController,
  resetPasswordController,
} from '../controllers/auth.js';

const authRouter = Router();
authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
authRouter.post('/logout', ctrlWrapper(logoutUserController));

authRouter.post('/refresh', ctrlWrapper(refreshUserSessionController));
export default authRouter;

authRouter.post(
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);
authRouter.post(
  '/reset-pwd',
  validateBody(resetPassordSchema),
  ctrlWrapper(resetPasswordController),
);
authRouter.get('/get-oauth-url', ctrlWrapper(getGoogleOAuthUrlController));
authRouter.post(
  '/confirm-oauth',
  validateBody(loginWithGoogleOAuthSchema),
  ctrlWrapper(loginWithGoogleController),
);
