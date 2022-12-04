import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Products } from '../modules/products';
import { ActivatedRoute } from '@angular/router';
// import { ProductCart } from '../modules/productCart';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product!: Products;
  productsQuantity: number[];
  quantity: number = 1;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productsQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  //get all products and filtering them by id
  ngOnInit(): void {
    try {
      let routeParams = this.activatedRoute.snapshot.params;
      this.productService.getAllProducts().subscribe((data) => {
        this.product = data.find((product) => {
          return product.id == routeParams['id'];
        }) as Products;
        if (this.product) this.product.quantity = 1;
      });
    } catch (err) {
      throw new Error("Sorry, can't find the products");
    }
  }

  //added item to cart
  addedOnSubmit(product: Products): void {
    product.quantity = this.quantity;
    this.cartService.addProduct(product);
    window.alert(
      ` ${this.product.quantity} for ${this.product.name} added successfully`
    );
    //reset the quantity to 1
    this.quantity = 1;
  }
}
