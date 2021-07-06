import {Component, OnDestroy, OnInit} from '@angular/core';
import {APIResponse, Fanfic} from "../../models";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // @ts-ignore
  public sort: string;
  // @ts-ignore
  public fanfics: any;
  private routeSub: Subscription = new Subscription;
  private fanficSub: Subscription = new Subscription();

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) =>{
      if (params['fanfic-search']){
        this.searchFanfics('id', params['fanfic-search']);
      } else {
        this.searchFanfics('id');
      }
    });
  }

  searchFanfics(sort:string, search?: string): void{
    this.fanficSub = this.httpService
      .getFanficList(sort)
      .subscribe((fanficList: APIResponse<Fanfic>) =>{
        this.fanfics = fanficList;
        console.log(fanficList, this.fanfics);
      });
  }

  openFanficDetails(id:string): void{
    this.router.navigate(['details', id]);
  }

  ngOnDestroy():void{
    if (this.fanficSub){
      this.fanficSub.unsubscribe()
    }
    if (this.routeSub){
      this.routeSub.unsubscribe()
    }
  }


}
