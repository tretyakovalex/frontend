import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JstoreComponent } from './pages/jstore/jstore.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MainServicesComponent } from './pages/main-services/main-services.component';
import { JacobsServicesComponent } from './pages/jacobs-services/jacobs-services.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JstoreComponent,
    NavbarComponent,
    MainServicesComponent,
    JacobsServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
