import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductServicesService } from 'src/app/product-services.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css'],
})
export class ProductMenuComponent implements OnInit {
  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();
  constructor(private proSer: ProductServicesService) {}
  sortType: any[] = [
    'Name (Descending)',
    'Price (Low to High)',
    'Price (High to Low)',
    'Rate (High to Low)',
  ];
  selectedType: string = 'Default Sort';
  compare(a: any, b: any) {
    let x = a.name.toUpperCase();
    let y = b.name.toUpperCase();
    let comparison = 0;
    if (x > y) {
      comparison = -1;
    } else if (x < y) {
      comparison = 1;
    }
    return comparison;
  }
  selectedSort(str: string) {
    this.selectedType = str;
    if (str == 'Name (Descending)') {
      this.products.sort(this.compare);
      this.loadPagination(1);
    }
    if (str == 'Price (Low to High)') {
      this.products.sort((n1, n2) => n1.price - n2.price);
      this.loadPagination(1);
    }
    if (str == 'Price (High to Low)') {
      this.products.sort((n1, n2) => n2.price - n1.price);
      this.loadPagination(1);
    }
    if (str == 'Rate (High to Low)') {
      this.products.sort((n1, n2) => n2.rate - n1.rate);
      this.loadPagination(1);
    }
  }
  searchKey: string = '';
  search() {
    if (this.searchKey == '') {
      this.load();
    } else {
      this.pageData = this.products.filter((x) =>
        x.name.toLowerCase().includes(this.searchKey)
      );
    }
  }
  products: any[] = [];
  i: number = 0;
  pageData: any[] = [];
  totalPages: number = 0;
  pageSize: number = 12;
  currentPage: number = 0;
  pages: any[] = [];
  loadPagination(pageNumber: number) {
    this.totalPages = Math.ceil(this.products.length / this.pageSize);
    if (pageNumber <= 0) {
      pageNumber = 1;
      let start = (pageNumber - 1) * this.pageSize;
      let end = start + this.pageSize;
      this.pageData = this.products.slice(start, end);
      this.currentPage = 1;
      this.pages = new Array(this.totalPages);
    }
    if (pageNumber > this.totalPages) {
      pageNumber = this.totalPages;
      let start = (pageNumber - 1) * this.pageSize;
      let end = start + this.pageSize;
      this.pageData = this.products.slice(start, end);
      this.currentPage = pageNumber;
      this.pages = new Array(this.totalPages);
    } else {
      // this.totalPages = Math.ceil(this.products.length / this.pageSize);
      let start = (pageNumber - 1) * this.pageSize;
      let end = start + this.pageSize;
      this.pageData = this.products.slice(start, end);
      this.currentPage = pageNumber;
      this.pages = new Array(this.totalPages);
      console.log(this.currentPage);
    }
  }
  buy(product: any) {
    const itemCart = {
      product: product,
      quantity: 1,
    };
    let flag = true;
    let carts = localStorage.getItem('carts')
      ? JSON.parse(localStorage.getItem('carts') || '{}')
      : [];
    carts = carts.map((x: { product: { id: number }; quantity: number }) => {
      if (x.product.id == product.id) {
        x.quantity += 1;
        flag = false;
      }
      return x;
    });
    if (flag) {
      carts.push(itemCart);
    }
    localStorage.setItem('carts', JSON.stringify(carts));

    this.addToCart.emit();
  }
  load() {
    this.proSer
      .getFromApi('http://localhost:3000/products')
      .subscribe((response) => {
        this.products = response;
        this.loadPagination(1);
      });
  }
  ngOnInit(): void {
    this.load();
  }
}
