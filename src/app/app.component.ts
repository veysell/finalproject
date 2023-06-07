import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'finalproject';
  user: string = "Veysel Duran";
  product1 = { productId: 1, productName: "Bardak", categoryId: 1, unitPrice: 5 }
  product2 = { productId: 1, productName: "Suluk", categoryId: 1, unitPrice: 5 }
  product3 = { productId: 1, productName: "Yatak", categoryId: 1, unitPrice: 5 }
  product4 = { productId: 1, productName: "Cam", categoryId: 1, unitPrice: 5 }
  product5 = { productId: 1, productName: "Sucuk", categoryId: 1, unitPrice: 5 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5]
}
