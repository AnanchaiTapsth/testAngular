import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Import SCSS file here
})
export class AppComponent {
  searchText: string = '';
  showAddFormFlag: boolean = false;
  newProduct: any = {
    name: '',
    description: '',
    price: null,
    image: ''
  };
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
  ];

  ngOnInit() {}

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  showAddForm() {
    this.showAddFormFlag = true;
  }
  submitNewProduct() {
    this.products.push(this.newProduct);
    this.newProduct = {
      name: '',
      description: '',
      price: null,
      image: ''
    };
    this.showAddFormFlag = false;
  }

  get filteredProducts(): any[] {
    if (!this.searchText) {
      return this.products;
    }
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
