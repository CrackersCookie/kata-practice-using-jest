const every = (list, predicate) => {
  if (!list.length) return false;

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) return false;
  }
  return true
}

const contains = (list, value) => {
  if (!list.length) return false;
  else if (list.indexOf(value) >= 0) return true;
}

const some = (list, predicate) => {
  if (!list.length) return false;
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return true;
  }
  return false;
};

module.exports = {
  every,
  contains,
  some
};
