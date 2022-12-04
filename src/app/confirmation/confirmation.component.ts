import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../modules/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  order: Cart;
  constructor(private cartService: CartService, private router: Router) {
    this.order = {
      id: 1,
      price: 1,
      creditCard: 1,
      fullName: '',
    };
  }
  ngOnInit(): void {
    this.order = this.cartService.getOrder();
  }
  //clear user cart after successfully order
  deleteCart(): void {
    this.cartService.emptyCart();
    this.router.navigate(['/']);
  }
}
