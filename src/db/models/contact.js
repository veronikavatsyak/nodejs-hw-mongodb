import { model, Schema } from 'mongoose';
import { contactTypeList } from '../../constants/contact.js';
import { handleSaveError, setUpdateSettings } from './hooks.js';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: contactTypeList,
      required: true,
      default: 'personal',
    },
  },
  { versionKey: false, timestamps: true },
);
contactsSchema.post('save', handleSaveError);
contactsSchema.post('findOneAndUpdate', handleSaveError);
contactsSchema.pre('findOneAndUpdate', setUpdateSettings);
export const ContactsCollection = model('contacts', contactsSchema);
