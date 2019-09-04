const every = (list, predicate) => {
  if (!list.length) return false;

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) return false;
  }
  return true
}

const contains = () => {

}

const some = () => {

}

module.exports = {
  every,
  contains,
  some
};
