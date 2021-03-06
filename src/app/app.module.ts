import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/primeng';


import {InputTextModule ,ButtonModule,GrowlModule,PanelModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { BodyComponent } from './body/body.component';
import { InfoFeedsComponent } from './info-feeds/info-feeds.component';
import { ArticleComponent } from './article/article.component';
import { TinymceComponent } from './tinymce/tinymce.component';

// services.ts

import { InfoFeedsService } from './info-feeds/info-feeds.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    BodyComponent,
    InfoFeedsComponent,
    ArticleComponent,
    TinymceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    GrowlModule,
    PanelModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [InfoFeedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
