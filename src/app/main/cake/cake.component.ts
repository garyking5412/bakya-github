import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductServicesService } from 'src/app/product-services.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css'],
})
export class CakeComponent implements OnInit {
  @Output() clickBuy: EventEmitter<any> = new EventEmitter<any>();
  constructor(private proSer: ProductServicesService) {}
  products: any[] = [];
  i: number = 0;
  pageData: any[] = [];
  totalPages: number = 0;
  pageSize: number = 4;
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
  load() {
    this.proSer
      .getFromApi('http://localhost:3000/products')
      .subscribe((response) => {
        let temp: any[] = response;
        this.products = temp.filter((x) => x.Category == 'Cake');
        this.loadPagination(1);
      });
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

    this.clickBuy.emit();
  }
  ngOnInit(): void {
    this.load();
  }
}
