import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss']
})
export class EditContentComponent implements OnInit {

  private content: any;
  private columns: ContentColumn[] = [
    {
      active: false,
      contents: []
    },
    {
      active: false,
      contents: []
    },
    {
      active: false,
      contents: []
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  isActive(columnIndex: number) {
    return this.columns[columnIndex].active;
  }

  setAsActive(columnIndex: number) {
    this.columns[columnIndex].active = true;
  }

  onInputDone(columnIndex: number, textValue: string) {
    if (textValue) {
      this.addTextContent(columnIndex, textValue);
    }
    this.columns[columnIndex].active = false;
  }

  addTextContent(columnIndex: number, textValue: string) {
    this.columns[columnIndex].contents.push({
      type: "text",
      content: textValue
    });
  }

}

export class ContentColumn {
  active: boolean = false;
  contents: Content[] = []
}

export class Content {
  type: string;
  content: any;
}
