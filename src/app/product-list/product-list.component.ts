import { Component, OnInit } from '@angular/core';
import { Products } from '../modules/products';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Products[] = [];
  constructor(
    private productsService: ProductService,
    private cartService: CartService
  ) {}

  //call products and set all to 1
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      for (let product of data) {
        const item = product;
        item.quantity = 1;
      }
      this.productList = data;
      this.productsService.setProducts(data);
    });
  }

  // add products into user cart
  addProduct(product: Products): void {
    this.cartService.addProduct(product);
  }
}
