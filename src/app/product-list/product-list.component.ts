import { Component, OnInit } from '@angular/core';
import { Products } from '../modules/products';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Products[] = [];
  productsQuantity: number[] = [];
  constructor(private productsService: ProductService) {}

  //call products
  ngOnInit(): void {
    this.productsQuantity = this.productsService.productsQuantity;
    this.productsService
      .getAllProducts()
      .subscribe((data) => (this.productList = data));
  }
}
