import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule }     from './app-routing.module';

import { AuthService } from './shared/auth.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
    
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListViewComponent,
    //HttpClient
  ],
  bootstrap: [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
