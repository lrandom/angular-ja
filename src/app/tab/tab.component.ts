import {Component} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  public tabs: any = null;
  public activeTab: number = 0;

  constructor() {
    this.tabs = [
      {
        title: 'Tab 1',
        content: 'Content Of Tab 1'
      },
      {
        title: 'Tab 2',
        content: 'Content Of Tab 2'
      },
      {
        title: 'Tab 3',
        content: 'Content Of Tab 3'
      }
    ]
  }

  selectTab(index: number) {
    this.activeTab = index;
  }

}
