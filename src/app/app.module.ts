import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MaterialModule } from './shared/material-module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartWrapperComponent } from './components/chart-wrapper/chart-wrapper.component';
import { ChartWrapperAComponent } from './components/chart-wrapper1/chart-wrapper1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { RestApiService } from './services/rest-api.service'

@NgModule({
  declarations: [
    AppComponent,
    ChartWrapperComponent,
    ChartWrapperAComponent,
    DashboardComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
