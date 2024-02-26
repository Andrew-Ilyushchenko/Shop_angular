import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [
    AppComponent,
    Product,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
