import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultComponent } from './UI/layaouts/default/default.component';
import { OutsideComponent } from './UI/layaouts/outside/outside.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './UI/shared/header/header.component';
import { FooterComponent } from './UI/shared/footer/footer.component';
import { SharedComponent } from './UI/shared/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OutsideComponent,
    HeaderComponent,
    FooterComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
