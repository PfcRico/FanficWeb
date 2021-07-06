import {Component, Input, OnInit} from '@angular/core';
import {Fanfic} from "../../models";

@Component({
  selector: 'app-fanfic-tabs',
  templateUrl: './fanfic-tabs.component.html',
  styleUrls: ['./fanfic-tabs.component.scss']
})
export class FanficTabsComponent implements OnInit {
  // @ts-ignore
  @Input() fanfic: Fanfic
  constructor() { }

  ngOnInit(): void {
  }

}
