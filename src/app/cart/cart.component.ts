import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../modules/products';
import { Cart } from '../modules/cart';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  info = {
    id: 1,
    fullName: '',
    address: '',
    creditCard: 1,
    totalPrice: 1,
  };
  @Input() cartProducts: Products[];
  order: Cart;
  constructor(private router: Router, private cartService: CartService) {
    this.cartProducts = [];
    this.order = {
      id: 1,
      price: 1,
      fullName: '',
      creditCard: 1,
    };
  }
  ngOnInit(): void {
    this.cartProducts = this.cartService.getProducts();
    this.totalPrice();
  }

  //update cart price when user change the quantity of the product
  update(): void {
    this.totalPrice();
  }
  //calculate total price for the cart
  totalPrice(): void {
    this.info.totalPrice = 0;
    for (let p of this.cartProducts) {
      let quantity = p.quantity;
      console.log(quantity);
      this.info.totalPrice += p.price * quantity;
    }
    console.log(this.info.totalPrice);
  }

  remove(item: Products): void {
    if (confirm(`Are you sure do you want to remove ${item.name} >`)) {
      if (item.quantity <= 0) {
        this.cartProducts = this.cartProducts.filter(
          (data) => data.id !== item.id
        );
        window.alert(`${item.name} has been removed`);
      }
    }
  }
  onSubmit(): void {
    if (this.info.totalPrice > 0) {
      this.cartService.setOrder({
        id: this.info.id,
        fullName: this.info.fullName,
        creditCard: this.info.creditCard,
        price: this.info.totalPrice,
      });
      this.router.navigate(['/confirmation']);
      this.cartProducts = this.cartService.emptyCart();
      this.info = {
        id: 1,
        fullName: '',
        address: '',
        creditCard: 1,
        totalPrice: 1,
      };
    }
  }
}
