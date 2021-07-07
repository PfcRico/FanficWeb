import { Component, OnInit, Input } from '@angular/core';
import {HttpService} from "../../services/http.service";


@Component({
  selector: 'app-add-fanfic',
  templateUrl: './add-fanfic.component.html',
  styleUrls: ['./add-fanfic.component.scss']
})
export class AddFanficComponent implements OnInit {

  // @ts-ignore
  name: string;
  // @ts-ignore
  author: string;
  // @ts-ignore
  genre: string;
  // @ts-ignore
  fandom: string;
  // @ts-ignore
  text: string;
  // @ts-ignore
  picUrl: string;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  postData() {

    this.httpService.addFanfic(this.name,this.author,this.fandom, this.genre, this.picUrl, this.text)

  }
}
