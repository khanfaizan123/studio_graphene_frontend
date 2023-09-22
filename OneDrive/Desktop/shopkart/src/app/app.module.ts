import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from "ngx-infinite-scroll";


// ...



import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppComponent } from './app.component';
import { PrdoctComponent } from './components/prdoct/prdoct.component';
import Swiper from 'swiper';

@NgModule({
  declarations: [
    AppComponent,
    PrdoctComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [Swiper],
  bootstrap: [AppComponent]
})
export class AppModule { }
