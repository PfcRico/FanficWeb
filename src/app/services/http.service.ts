import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {environment as env} from 'src/environments/environment'
import {APIResponse, Fanfic} from "../models";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getFanficList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Fanfic>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Fanfic>>(`${env.BASE_URL}/fanficsSorted`, {
      params: params,
    });
  }

  getFanficDetails(id: number): Observable<Fanfic>{
    const fanficInfoRequest = this.http.get(`${env.BASE_URL}/fanfic/${id}`);

    return forkJoin({
      fanficInfoRequest
    }).pipe(map((resp: any) =>{
      return {
        ...resp['fanficInfoRequest']
      };
    }))
  }
}

