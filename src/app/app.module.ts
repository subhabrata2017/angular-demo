import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { PageService } from './second-page/page.service';


@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
