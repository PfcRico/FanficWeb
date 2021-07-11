import {Component, Input, OnInit} from '@angular/core';
import {Fanfic} from "../../models";
import {HttpService} from "../../_services/http.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fanfic-tabs',
  templateUrl: './fanfic-tabs.component.html',
  styleUrls: ['./fanfic-tabs.component.scss']
})

export class FanficTabsComponent implements OnInit {
  // @ts-ignore
  @Input() fanfic: Fanfic


  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];

  snackBarDuration = 1000;
  response = [
    'You broke my heart!',
    'Really?',
    'We will do better next time.',
    'Glad you like it!',
    'Thank you so much!'
  ]


  constructor(
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) {
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
  }

  loadScripts() {
    const dynamicScripts = ['https://platform.twitter.com/widgets.js'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  updateRating(id: number, rating: number): void {
    this.httpService.updateRating(id,rating)
  }

  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
    console.log('/details/' + this.fanfic.id);
    this.updateRating(this.fanfic.id,this.rating)
    this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });
  }
}

@Component({
  selector: 'any-component',
  template: `<disqus [identifier]="pageId"></disqus>`
})

export class AnyComponent {

  @Input() id = 1;

  pageId = '/details/';
  pageUrl = this.pageId + '/' + this.id;

}


