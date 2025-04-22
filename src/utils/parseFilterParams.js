import { contactTypeList, isFavouriteList } from '../constants/contact.js';

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;
  const parsedType = contactTypeList.includes(type) ? type : undefined;
  const parsedIsFavourite = isFavouriteList.includes(isFavourite)
    ? isFavourite === 'true'
    : undefined;
  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
