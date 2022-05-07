import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { BreadcrumbsService } from './core/services/breadcrumbs.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './core/services/http.service';
import { HttpRequestInterceptor } from './core/interceptors/httpRequest.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    BreadcrumbsService,
    HttpService,
    HttpRequestInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
