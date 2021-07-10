import {Component, OnDestroy, OnInit} from '@angular/core';
import {Fanfic} from "../../models";
import {Subscription} from "rxjs";
import {HttpService} from "../../_services/http.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  fanficRating = 0;
  // @ts-ignore
  fanficId: number;
  // @ts-ignore
  fanfic: Fanfic;
  // @ts-ignore
  routeSub: Subscription;
  // @ts-ignore
  fanficSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) =>{
      this.fanficId = params['id'];
      this.getFanficDetails(this.fanficId);
    })
  }

  getFanficDetails(id:number):void{
    this.fanficSub = this.httpService
      .getFanficDetails(id)
      .subscribe((fanficResp: Fanfic) =>{
        this.fanfic = fanficResp;

        setTimeout(() => {
          this.fanficRating = this.fanfic.avgRating;}, 1000);
        });

  }

  getColor(value: number): string{
    if (value >= 4){
      return '#5ee432'
    } else if (value >= 3){
      return '#fffa50'
    }
    return '#f60000'
  }

  ngOnDestroy():void {
    if(this.fanficSub){
      this.fanficSub.unsubscribe();
    }
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }

}
