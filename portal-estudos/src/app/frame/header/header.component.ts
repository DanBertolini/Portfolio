import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pde-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private loginOpened: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  openLoginDialog(){
    this.loginOpened = true;
  }

  closeLoginDialog(){
    this.loginOpened = false;
  }

}
