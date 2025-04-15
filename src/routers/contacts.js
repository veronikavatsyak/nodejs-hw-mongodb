import { Router } from 'express';
import {
  addContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
router.post('/contact', ctrlWrapper(addContactController));
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));
export default router;
