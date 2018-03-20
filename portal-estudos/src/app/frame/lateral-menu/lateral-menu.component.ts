import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'pde-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss']
})
export class LateralMenuComponent implements OnInit {

  private isMenuOpened: boolean;
  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  ngOnInit() {
    this.isMenuOpened = false;
  }

  openMenu() {
    this.isMenuOpened = true;
    this.menuToggle.emit(true);
  }

  closeMenu() {
    this.isMenuOpened = false;
    this.menuToggle.emit(false);
  }

}
