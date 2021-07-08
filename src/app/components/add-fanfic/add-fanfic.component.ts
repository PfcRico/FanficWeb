import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {FormControl, NgForm, Validators} from "@angular/forms";


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

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  postData(adding: NgForm) {

    this.httpService.addFanfic(JSON.stringify(adding.value))
  }
}
