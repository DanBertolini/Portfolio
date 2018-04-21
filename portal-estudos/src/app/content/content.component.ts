import { NavigationService } from './../services/navigation.service';
import { Component, OnInit, Input } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private currentView: string = "main_page";
  constructor(private navigationService: NavigationService) {
    navigationService.getCurrentView().subscribe((view) => {
      this.currentView = view;
    });
  }

  ngOnInit() {
    this.navigationService.initializeNavigation();
  }

}
