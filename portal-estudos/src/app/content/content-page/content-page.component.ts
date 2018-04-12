import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  @Input() pageId;

  constructor() { }

  ngOnInit() {
  }

}
