import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { AboutComponent } from './about/about.component';
import { WhyusComponent } from './whyus/whyus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BookusComponent } from './bookus/bookus.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { ProductsModule } from './products/products.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeCardComponent,
    AboutComponent,
    WhyusComponent,
    ServicesComponent,
    ContactComponent,
    BookusComponent,
    TopBarComponent,
    TestimonalComponent,
    BestSellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
