import { Platform } from 'react-native';

export const localDataLoader = () => {
  return new Promise((resolve, reject) => {
    let listItems;
    if (Platform.OS === "ios") {
      listItems = require("../../assets/iosListItems.json");
    }
    else {
      listItems = require("../../assets/androidListItems.json");
    }

    resolve(listItems);
  });
}

export const networkDataLoader = () => {
  return fetch("http://192.168.1.158/thesis/listItems.json")
    .then((response) => response.json());
}
