import { ProductCart } from './productCart';

export class Cart {
  id: number;
  fullName: string;
  price: number;
  creditCard: number;
  constructor() {
    this.id = 1;
    this.fullName = '';
    this.price = 1;
    this.creditCard = 1;
  }
}
