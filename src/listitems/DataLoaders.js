const localDataLoader = new Promise((resolve, reject) => {
  const listItems = require("../../assets/listItems.json");
  resolve(listItems);
});

const networkDataLoader = fetch("192.168.1.42/reactnative/listItems.json")
  .then((response) => response.json());