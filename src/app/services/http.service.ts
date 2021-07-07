import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {environment as env} from 'src/environments/environment'
import {APIResponse, Fanfic} from "../models";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

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

  getFanficDetails(id: number): Observable<Fanfic> {
    const fanficInfoRequest = this.http.get(`${env.BASE_URL}/fanfic/${id}`);

    return forkJoin({
      fanficInfoRequest
    }).pipe(map((resp: any) => {
      return {
        ...resp['fanficInfoRequest']
      };
    }))
  }

  addFanfic(name: string,
            author: string,
            fandom: string,
            genre: string,
            picUrl: string,
            text: string) {
    this.http.post(`${env.BASE_URL}/addFanfic`,{
      name, author, fandom, genre, text
    }).toPromise().then((data:any) =>{console.log(data)})

  }
}

