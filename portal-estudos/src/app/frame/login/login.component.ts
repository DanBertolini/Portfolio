import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'pde-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  @Output() onLoginClose: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = null;
  }

  closeLogin(){
    this.onLoginClose.emit();
  }

}
