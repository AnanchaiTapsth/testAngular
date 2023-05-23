import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  searchText: string = '';
  products: any[] = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 9.99,
      image: 'product1.jpg'
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      image: 'product2.jpg'
    },
    // Add more sample product data
  ];

  ngOnInit() {}

  get filteredProducts(): any[] {
    if (!this.searchText) {
      return this.products;
    }
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}