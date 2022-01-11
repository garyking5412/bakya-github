import { ProductDetailComponent } from './main/product-detail/product-detail.component';
import { HomeComponent } from './main/home/home.component';
import { ProductMenuComponent } from './main/product-menu/product-menu.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BakyaBakeryDemo';
  data: any[] = [];
  onActive(componentRef: any) {
    if (componentRef instanceof ProductMenuComponent) {
      componentRef.addToCart.subscribe(() => {
        this.data = localStorage.getItem('carts')
          ? JSON.parse(localStorage.getItem('carts') || '{}')
          : [];
      });
    }
    if (componentRef instanceof HomeComponent) {
      componentRef.transactionTransmit.subscribe(() => {
        this.data = localStorage.getItem('carts')
          ? JSON.parse(localStorage.getItem('carts') || '{}')
          : [];
      });
    }
    if (componentRef instanceof ProductDetailComponent) {
      componentRef.clickBuy.subscribe(() => {
        this.data = localStorage.getItem('carts')
          ? JSON.parse(localStorage.getItem('carts') || '{}')
          : [];
      });
    }
  }
}
