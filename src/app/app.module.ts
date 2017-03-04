import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HospitalResultComponent } from './hospital-result.component';
import { SearchSettingsComponent } from './search-and_settings.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HospitalResultComponent,
    SearchSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
