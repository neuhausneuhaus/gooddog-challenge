export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function get(obj, path, valueIfMissing = undefined) {
  const keys = path.split('.');
  let key;
  let value = obj;

  while (keys.length > 0) {
    key = keys.shift();
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return valueIfMissing;
    }
  }

  return value;
}
