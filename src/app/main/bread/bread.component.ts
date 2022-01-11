import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/product-services.service';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css'],
})
export class BreadComponent implements OnInit {
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
        this.products = temp.filter((x) => x.Category == 'Bread');
        this.loadPagination(1);
      });
  }
  ngOnInit(): void {
    this.load();
  }
}
