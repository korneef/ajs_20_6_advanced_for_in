export default function orderByProps(obj, sortObj) {
  const sortProps = [];

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      sortProps.push({ key: prop, value: obj[prop] });
    }
  }

  sortProps.sort((a, b) => {
    if (Object.values(b) > Object.values(a)) {
      return -1;
    }
    return 1;
  });

  sortObj.reverse();

  for (let i = 0; i < sortObj.length; i += 1) {
    const index = sortProps.findIndex((itm) => {
      if (Object.values(itm)[0] === sortObj[i]) {
        return true;
      }
      return false;
    });

    sortProps.unshift(sortProps.splice(index, 1)[0]);
  }

  return sortProps;
}
