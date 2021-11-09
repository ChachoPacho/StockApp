import AsyncStorage from "@react-native-async-storage/async-storage";

export class DataBase {
  static get storageName() {
    return "";
  }

  static get defaultValue() {
    return null;
  }

  static async setStorage(storageData) {
    const stringfyStorage = JSON.stringify(storageData);
    return await AsyncStorage.setItem(this.storageName, stringfyStorage);
  }

  static async updateStorage(storageData) {
    const stringfyStorage = JSON.stringify(storageData);
    return await AsyncStorage.mergeItem(
      this.storageName,
      stringfyStorage,
      (error) => {
        if (error) {
          DataBase.setStorage(storageData);
        }
      }
    );
  }

  static async getStorage() {
    const stringfyStorage = await AsyncStorage.getItem(
      this.storageName,
      (error, result) => {
        if (error || !result) {
          DataBase.setStorage(this.defaultValue);
        }
      });
    return JSON.parse(stringfyStorage) || this.defaultValue;
  }
}