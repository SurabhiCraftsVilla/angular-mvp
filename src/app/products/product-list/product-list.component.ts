import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from 'src/app/service/data-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'scv-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  paramsSubscription: Subscription;
  querySubscription: Subscription;
  type:string;
  page:string;

  stapelConfig:any;

  constructor(private route:ActivatedRoute, private router:Router,private dataService: DataService) { }

  ngOnInit() {
    this.dataService.setHeaderFixedState();
    this.initGrid();
    this.paramsSubscription = this.route.params.subscribe((param: any) => {
      this.type = param['type'];
      this.querySubscription = this.route.queryParams.subscribe((queryParam: any) => {
          this.page = queryParam['page'];
          if(Object.keys(queryParam).length ==0 ){
            this.closeDetailView();
          }
          if (this.page)
              //this.goToPageNo(this.type, this.page);
              console.log(this.type,this.page);
          else
          console.log(this.type);
              //this.goToPage(this.type);
      });
  });    
  }

  addQueryParamsAndOpenDetailView(itemName) {
    this.router.navigate([], { 
      queryParams: {
        query: itemName
      }
    });
  }

  initGrid() {
    this.stapelConfig = {
      grid:$('#tp-grid'),
      name: $('#name'),
      close: $('#close')
    }
    this.stapelConfig.loader = $('<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>').insertBefore(this.stapelConfig.grid);
    this.stapelConfig.stapel = this.stapelConfig.grid.stapel({
        delay: 50,
        onLoad: _ => {
          this.stapelConfig.loader.remove()
        },
        onBeforeOpen: (pileName) => {
          //this.stapelConfig.name.html(pileName)
          this.addQueryParamsAndOpenDetailView(pileName);
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })          
        },
        onAfterOpen: (pileName) => {
          this.stapelConfig.close.show()
        }
      })
      this.stapelConfig.close.on('click', function () {
        this.closeDetailView();
      })    
  }

  closeDetailView() {
    this.stapelConfig.close.hide()
    this.stapelConfig.name.empty()
    this.stapelConfig.stapel ? this.stapelConfig.stapel.closePile() :'';
  }
  
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

}
