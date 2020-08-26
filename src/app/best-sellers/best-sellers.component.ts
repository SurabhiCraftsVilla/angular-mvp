import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'scv-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})

export class BestSellersComponent  {

  constructor() { }

  ngAfterViewInit() {
    setTimeout(_ => {
      $(document).ready(_ => {
        this.startCarousel();
      });
    },100);    
  }

  startCarousel(){
    $(".events-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  
    // Products carousel (uses the Owl Carousel library)
    $(".featured-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items:4,
      lazyLoad: true,
      autoplayTimeout: 3000,
      margin: 10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:true
          }
      }    
    });
    $('.venobox').venobox();  
  }

}
