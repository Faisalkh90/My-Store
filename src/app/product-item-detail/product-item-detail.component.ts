import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Products } from '../modules/products';
import { ActivatedRoute } from '@angular/router';
import { ProductCart } from '../modules/productCart';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  productList: Products[] = [];
  product: Products = {
    id: 1,
    name: '',
    price: 1,
    url: '',
    description: '',
    quantity: 1,
  };
  productsQuantity: number[] = [];
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  //get all products and filtering them by id
  ngOnInit(): void {
    try {
      let routeParams = this.activatedRoute.snapshot.params;
      this.productService.getAllProducts().subscribe((data) => {
        this.product = data.find((product) => {
          return product.id == routeParams['id'];
        }) as Products;
      });
      this.productsQuantity = this.productService.productsQuantity.slice(1);
    } catch (err) {
      throw new Error("Sorry, can't find the products");
    }
  }

  //added item to cart
  addedOnSubmit(e: any): void {
    let optionSelected =
      e.target[0].options[e.target[0].options.selectedIndex].value;
    let cart: ProductCart = {
      ...this.product,
      option: parseInt(optionSelected),
    };
    this.cartService.checkCart(cart);
    // product.quantity = 1;
    // this.cartService.addProduct(product);
    window.alert(`${this.product.name} added successfully`);
  }
}
