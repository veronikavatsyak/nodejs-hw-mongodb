import Joi from 'joi';
export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Contacts name should be a string',
    'string.min': 'Minimum {#limit} symbols',
    'string.max': 'Maximum {#limit} symbols',
    'any.required': 'Contacts name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Minimum {#limit} symbols',
    'string.max': 'Maximum {#limit} symbols',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Email should be a string',
    'string.min': 'Minimum {#limit} symbols',
    'string.max': 'Maximum {#limit} symbols',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.base': 'Contacts type should be a string',
      'string.min': 'Minimum {#limit} symbols',
      'string.max': 'Maximum {#limit} symbols',
      'any.required': 'Contacts type is required',
    }),
  photo: Joi.any().optional(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Contacts name should be a string',
    'string.min': 'Minimum {#limit} symbols',
    'string.max': 'Maximum {#limit} symbols',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Minimum {#limit} symbols',
    'string.max': 'Maximum {#limit} symbols',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Email should be a string',
    'string.min': 'Minimum {#limit} symbols',
    'string.max': 'Maximum {#limit} symbols',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite must be a boolean',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .min(3)
    .max(20)
    .messages({
      'string.base': 'Contacts type should be a string',
      'string.min': 'Minimum {#limit} symbols',
      'string.max': 'Maximum {#limit} symbols',
    }),
  photo: Joi.any().optional(),
});
