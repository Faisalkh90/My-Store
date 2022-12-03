import { Injectable } from '@angular/core';
import { Cart } from '../modules/cart';
import { Products } from '../modules/products';
import { ProductCart } from '../modules/productCart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productList: ProductCart[] = [];
  cart: Cart = {
    id: 1,
    fullName: '',
    address: '',
    creditCard: 1,
    products: [],
  };
  constructor() {}

  // add product to cart
  addProduct(product: ProductCart): void {
    this.productList.push(product);
  }

  // return lost of products
  getProducts(): ProductCart[] {
    return this.productList;
  }

  //empty user cart after complete order successfully
  emptyCart(): ProductCart[] {
    this.productList = [];
    return this.productList;
  }

  // update product
  updateUserCart(product: ProductCart): void {
    // check
    if (product.option <= 0 && this.productList != undefined) {
      this.productList = this.productList.filter((data) => {
        return data.id != product.id;
      });
    } else {
      let product1 = this.productList.find((data) => data.id == product.id);
      if (product1) product1.option = product.option;
    }
  }

  // save order info
  setOrder(order: Cart): void {
    this.cart = order;
  }
  // check product if exist in the cart
  checkCart(product: ProductCart): void {
    let products = this.productList.find((data) => data.id == product.id);
    if (products) {
      products.option += product.option;
    } else {
      this.addProduct(product);
    }
  }
}
