import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routePath = {
  HOME : 'home',
  PRODUCTS: 'products',
  PRODUCT_LIST: 'list'
}

const routes: Routes = [{
  path: routePath.HOME,
  component: HomeComponent
}, {
  path: routePath.PRODUCTS,
  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
},
{
  path: '',
  redirectTo: routePath.HOME,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
