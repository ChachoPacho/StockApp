import { DataBase } from "./DataBase";

import { v4 } from 'uuid';
import { MANAGE_METHOD, PRODUCT_STORAGE } from "../../config";

export class ProductsDB extends DataBase {
  static get storageName() {
    return PRODUCT_STORAGE;
  }

  static get defaultValue() {
    return {};
  }

  static async setProducts(productsData) {
    return await ProductsDB.setStorage(productsData);
  }

  static async appendProduct(productData) {
    if (!productData.id) {
      productData.id = v4();
    }

    const stockableProduct = {
      [productData.id]: productData
    };

    return await ProductsDB.updateStorage(stockableProduct);
  }

  static async removeProduct(productId) {
    return await ProductsDB.getProducts()
      .then(products => {
        delete products[productId];
        ProductsDB.setProducts(products);
      });
  }

  static async getProducts() {
    return await ProductsDB.getStorage();
  }

  static async getProduct(productId) {
    return await ProductsDB.getProducts()
      .then((products) => products[productId]);
  }

  static async getProductsArray() {
    return await ProductsDB.getProducts()
      .then(Object.values);
  }


  static async applyOperationInProduct(productId, operation, quantity) {
    ProductsDB.getProduct(productId).then((product) => {
      const Q_SUM = quantity * (operation === MANAGE_METHOD.REMOVE) ? -1 : 1;
      product.stock += Q_SUM;
      ProductsDB.appendProduct(product);
    })
  }
}