import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Panda1Component } from './panda1/panda1.component';
import { Panda2Component } from './panda2/panda2.component';
import { Panda3Component } from './panda3/panda3.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Panda1Component,
    Panda2Component,
    Panda3Component,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
