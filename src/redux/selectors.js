export const getFilter = state => state.filter;

export const getVisibleContacts = (filter, contacts) => {
  const normalizeFilter = filter.toLowerCase();

  return contacts?.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
