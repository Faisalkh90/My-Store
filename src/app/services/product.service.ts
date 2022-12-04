import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../modules/products';
@Injectable({
  providedIn: 'root',
})

// create services to handle stream of data (products) that non UI logic
export class ProductService {
  //create products order quantity option
  product!: Products;
  productList!: Products[];
  constructor(private http: HttpClient) {}

  //fetch products info from JSON file
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('../assets/data.json');
  }
  //store product into a list
  setProducts(productList: Products[]): void {
    this.productList = productList;
  }
}
