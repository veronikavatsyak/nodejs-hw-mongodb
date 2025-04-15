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

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));
router.post('/', ctrlWrapper(addContactController));
router.patch('/:contactId', ctrlWrapper(patchContactController));
router.delete('/:contactId', ctrlWrapper(deleteContactController));
export default router;
