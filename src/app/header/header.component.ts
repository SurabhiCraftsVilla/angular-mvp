import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-service';

@Component({
  selector: 'scv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerConfig:any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.headerConfig = this.dataService.getHeaderConfig();
  }

}
