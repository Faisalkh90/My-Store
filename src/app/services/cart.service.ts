import { Injectable } from '@angular/core';
import { Cart } from '../modules/cart';
import { Products } from '../modules/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productList: Products[] = [];
  cart!: Cart;
  constructor() {}

  // add product to cart and update user cart
  addProduct(product: Products): void {
    try {
      const itemProduct = this.productList.filter((data) => {
        return data.id == product.id;
      })[0];

      if (itemProduct?.quantity > 0) {
        itemProduct.quantity = itemProduct.quantity + product.quantity;
      } else {
        this.productList.push(product);
      }
    } catch (err) {
      throw new Error(`Something went wrong in adding `);
    }
  }

  // return lost of products
  getProducts(): Products[] {
    return this.productList;
  }

  //empty user cart after complete order successfully
  emptyCart(): Products[] {
    return (this.productList = []);
  }

  // // update product
  // updateUserCart(product: ProductCart): void {
  //   // check
  //   if (product.option <= 0 && this.productList != undefined) {
  //     this.productList = this.productList.filter((data) => {
  //       return data.id != product.id;
  //     });
  //   } else {
  //     let product1 = this.productList.find((data) => data.id == product.id);
  //     if (product1) product1.option = product.option;
  //   }
  // }

  // save order info
  setOrder(order: Cart): void {
    this.cart = order;
  }
  //get user order info
  getOrder(): Cart {
    return this.cart;
  }
  // // check product if exist in the cart
  // checkCart(product: ProductCart): void {
  //   let products = this.productList.find((data) => data.id == product.id);
  //   if (products) {
  //     products.option += product.option;
  //   } else {
  //     this.addProduct(product);
  //   }
  // }
}
