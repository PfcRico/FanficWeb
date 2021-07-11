import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {GaugeModule} from "angular-gauge";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {HomeComponent} from './components/home/home.component';
import {HttpHeadersInterceptor} from "./interceptors/http-headers.interceptor";
import {HttpErrorsInterceptor} from "./interceptors/http-errors.interceptor";
import {DetailsComponent} from './components/details/details.component';
import {CommonModule} from '@angular/common';
import {AnyComponent, FanficTabsComponent} from './components/fanfic-tabs/fanfic-tabs.component';
import {AddFanficComponent} from './components/add-fanfic/add-fanfic.component';
import {FileUploadModule} from "ng2-file-upload";
import {CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BoardAdminComponent} from './components/board-admin/board-admin.component';
import {BoardModeratorComponent} from './components/board-moderator/board-moderator.component';
import {BoardUserComponent} from './components/board-user/board-user.component';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {DisqusModule} from "ngx-disqus";
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [

    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    FanficTabsComponent,
    AddFanficComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AnyComponent
  ],
  imports: [
    MatSnackBarModule,
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
    CommonModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinary, {
      cloud_name: 'pfcricoby',
      secure: true,
      upload_preset: 'jgdrsbhf',
      //@ts-ignore
      private_cdn: true,
      cname: 'mycompany.images.com'
    }),
    MatButtonModule,
    DisqusModule.forRoot('fanfic-web-herokuapp-com')


  ],
  providers: [authInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule {
}
