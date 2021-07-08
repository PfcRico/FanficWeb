import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders} from "@angular/common/http";
import { GaugeModule} from "angular-gauge";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import {HttpHeadersInterceptor} from "./interceptors/http-headers.interceptor";
import {HttpErrorsInterceptor} from "./interceptors/http-errors.interceptor";
import { DetailsComponent } from './components/details/details.component';
import { CommonModule } from '@angular/common';
import { FanficTabsComponent } from './components/fanfic-tabs/fanfic-tabs.component';
import { AddFanficComponent } from './components/add-fanfic/add-fanfic.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    FanficTabsComponent,
    AddFanficComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
