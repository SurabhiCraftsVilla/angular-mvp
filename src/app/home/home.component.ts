import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data-service';

@Component({
  selector: 'scv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.resetHeaderFixedState();
  }

}
