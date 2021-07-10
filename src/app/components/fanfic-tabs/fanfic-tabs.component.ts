import {Component, Input, OnInit} from '@angular/core';
import {Fanfic} from "../../models";
import {HttpService} from "../../services/http.service";
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
    this.updateRating(this.fanfic.id,this.rating)
    this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });
  }
}


