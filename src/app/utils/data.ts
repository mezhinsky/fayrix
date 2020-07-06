export const updateItemInObject = (data, item, id) => {
  const obj = Object.assign({}, data, {[id]: item});
  return obj;
};

export const deleteItemInObject = (data, id) => {
	const obj = Object.assign({}, data);
	delete obj[id];
  return obj;
};

export const addItemInObject = (data, item) => {
	const obj = Object.assign({}, data);
	obj[item.cowId] = item;
  return obj;
};