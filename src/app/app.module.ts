import { HttpClientModule } from '@angular/common/http';
import { ProductServicesService } from './product-services.service';
import { LazyLoadScriptService } from './lazy-load-script.service';
import { MainModule } from './main/main.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Footer1Component,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MainModule,
    HttpClientModule,
    SlickCarouselModule,
    StorageServiceModule,
    ReactiveFormsModule,
  ],
  providers: [LazyLoadScriptService, ProductServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
