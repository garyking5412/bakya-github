import { ProductDetailComponent } from './main/product-detail/product-detail.component';
import { ProductMenuComponent } from './main/product-menu/product-menu.component';
import { MainModule } from './main/main.module';
import { AboutFullscreenComponent } from './main/about-fullscreen/about-fullscreen.component';
import { HomeComponent } from './main/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  { path: 'about', component: AboutFullscreenComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductMenuComponent },
  {
    path: 'productDetails/:id',
    component: ProductDetailComponent,
  },
  { path: 'offer', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
