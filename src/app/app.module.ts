import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './shared/components/test/test.component';
import { productsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    productsComponent,
    ProductComponent,
    TestComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
