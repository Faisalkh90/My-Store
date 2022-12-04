import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Products } from '../modules/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  quantity: number;
  productsQuantity: number[];
  @Input() product: Products;
  @Output() addProduct = new EventEmitter();
  constructor(private productService: ProductService) {
    this.quantity = 1;
    this.productsQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.product = {
      id: 1,
      name: '',
      quantity: 1,
      url: '',
      price: 1,
      description: '',
    };
  }
  ngOnInit(): void {}

  // add product item into user cart
  addedOnSubmit(product: Products): void {
    product.quantity = this.quantity;
    if (this.productsQuantity.length > 0) {
      this.addProduct.emit(product);
      window.alert(
        ` ${this.product.quantity} for ${this.product.name} added successfully`
      );
      //reset the quantity to 1
      this.quantity = 1;
    } else {
      console.log('check condition ');
    }
  }
}
