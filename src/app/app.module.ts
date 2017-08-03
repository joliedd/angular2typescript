import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShirtsListComponent} from './shirts-list/shirts-list.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ShirtsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
