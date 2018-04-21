import { Component, OnInit, Input } from '@angular/core';
import { UIRouter } from '@uirouter/angular';

import { NavigationService } from './../../services/navigation.service';

import { Page } from '../../model/page';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() pages: Page[] = [];
  @Input() type: string;
  private newEnabled: boolean;

  constructor(private uiRouter: UIRouter, private navigationService: NavigationService) { }

  ngOnInit() {
    this.newEnabled = this.navigationService.isNewEnabled();
  }

  createNew(): void{
    this.uiRouter.stateService.go('content.new_page' );
  }

}
