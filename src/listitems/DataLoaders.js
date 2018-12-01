export const localDataLoader = () => {
  return new Promise((resolve, reject) => {
    const listItems = require("../../assets/listItems.json");
    resolve(listItems);
  });
}

export const networkDataLoader = () => {
  return fetch("http://192.168.1.158/thesis/listItems.json")
    .then((response) => response.json());
}
