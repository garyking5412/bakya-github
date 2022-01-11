import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BreadComponent } from './bread/bread.component';
import { CakeComponent } from './cake/cake.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutFullscreenComponent } from './about-fullscreen/about-fullscreen.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
const route: Routes = [
  { path: '', redirectTo: 'main/cake', pathMatch: 'full' },
  {
    path: 'main',
    component: HomeComponent,
    children: [
      {
        path: 'cake',
        component: CakeComponent,
      },
      {
        path: 'bread',
        component: BreadComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    HomeComponent,
    AboutFullscreenComponent,
    CakeComponent,
    BreadComponent,
    ProductMenuComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    SlickCarouselModule,
    RouterModule.forChild(route),
  ],
  exports: [HomeComponent],
})
export class MainModule {}
