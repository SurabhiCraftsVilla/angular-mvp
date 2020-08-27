import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { routePath } from '../app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [{
    path: routePath.PRODUCT_LIST,
    component: ProductListComponent
  },
  {
    path: '',
    redirectTo: routePath.PRODUCT_LIST,
    pathMatch: 'full'
  }];

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
