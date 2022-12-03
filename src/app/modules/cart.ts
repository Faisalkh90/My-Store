import { ProductCart } from './productCart';

export class Cart {
  id: number;
  fullName: string;
  address: string;
  products: ProductCart[];
  creditCard: number;
  constructor() {
    this.id = 1;
    this.fullName = '';
    this.address = '';
    this.products = [];
    this.creditCard = 1;
  }
}
