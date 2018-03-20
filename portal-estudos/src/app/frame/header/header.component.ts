import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pde-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menuOpened: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
