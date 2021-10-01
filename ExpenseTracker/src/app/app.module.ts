import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base-components/header/header.component';
import { FooterComponent } from './base-components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './base-components/landing-page/landing-page.component';

import { MatTabsModule } from '@angular/material/tabs';
import { EditPageModule } from './Edit/edit-page/edit-page.module';
import { ViewPageModule } from './View/view-page/view-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    EditPageModule,
    ViewPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
