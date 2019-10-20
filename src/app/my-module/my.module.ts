import { NgModule } from '@angular/core';
import { MyComponent } from './my-component/my.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MyComponent2 } from './my-component2/my.component2';


@NgModule({
  declarations: [
    MyComponent,
    MyComponent2,
  ],
  exports: [
    MyComponent,
    MyComponent2,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ]
})
export class MyModule {

}
