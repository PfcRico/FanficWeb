import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DetailsComponent} from "./components/details/details.component";
import {AddFanficComponent} from "./components/add-fanfic/add-fanfic.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'search/:fanfic-search',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'addFanfic',
    component: AddFanficComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
