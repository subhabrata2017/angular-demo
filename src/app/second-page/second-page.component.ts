import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  
  // @Input()
  users: string[] = [];
  
  // @Output() 
  // newItemEvent = new EventEmitter<string>();
  
  inPutValue: string = "2";
  
  constructor( private pageService: PageService ) { }

  ngOnInit() {    
    this.users = this.pageService.users;
    this.fetchAPIData();
  }
  
  getTextBoxValue() {    
    this.pageService.addUsers( this.inPutValue );
  }
  
  fetchAPIData(){
    this.pageService.fetchAPIData().then( response => {
      console.log( response );
    });
  }

}
