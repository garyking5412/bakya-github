import { LazyLoadScriptService } from './../../lazy-load-script.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductServicesService } from 'src/app/product-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Output() clickBuy: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private proSer: ProductServicesService,
    private route: ActivatedRoute
  ) {}
  displayItem: any = {
    // id: 1,
    // name: 'cupcake oatmeals',
    // price: 100,
    // image: 'assets/img/Kỷ niệm cấp 3_ (10).jpg',
    // image1: 'assets/img/Kimono_ (27).jpg',
    // image2: 'assets/img/Nỗi buồn không tên_ (2).jpg',
    // rate: 3,
    // des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus a quae assumenda culpa autem deleniti aspernatur provident nihil eligendi.',
    // origin: 'America',
    // status: 'In Stock',
    // brand: 'Theme Menu',
    // Category: 'Cake',
    // relatedProductImage: 'assets/img/GVN 360_Mafia_ (5).jpg',
    // relatedProductName: 'Croissants',
    // relatedProductPrice: 200,
  };
  starRate: any[] = [];
  shopQuantity: number = 1;
  add() {
    this.shopQuantity += 1;
  }
  subtract() {
    if (this.shopQuantity >= 2) {
      this.shopQuantity -= 1;
    } else {
      this.shopQuantity = 1;
    }
  }
  buy(product: any) {
    const itemCart = {
      product: product,
      quantity: this.shopQuantity,
    };
    let flag = true;
    let carts = localStorage.getItem('carts')
      ? JSON.parse(localStorage.getItem('carts') || '{}')
      : [];
    carts = carts.map((x: { product: { id: number }; quantity: number }) => {
      if (x.product.id == product.id) {
        x.quantity += this.shopQuantity;
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
    this.route.paramMap.subscribe((response) => {
      let id = response.get('id');
      console.log(id);
      this.proSer
        .getFromApi('http://localhost:3000/products/' + id)
        .subscribe((res) => {
          this.displayItem = res;
          this.starRate = new Array(this.displayItem.rate);
          console.log(this.displayItem);
          // console.log(this.displayItem);
          console.log(this.starRate);
        });
    });
  }
}
