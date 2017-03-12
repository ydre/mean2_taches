import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TachesComponent } from './taches/taches.component';

import { TachesService } from './services/taches.service';


const Routes = [
  {
    path: '',
    redirectTo: 'taches',
    pathMatch: 'full'
  },
  {
    path: 'taches',
    component: TachesComponent
  }
 ];



@NgModule({
  declarations: [
    AppComponent,
    TachesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [TachesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
