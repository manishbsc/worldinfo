import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes ,ExtraOptions} from '@angular/router';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { HttpserviceService } from './httpservice.service';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule,MatSelectModule,MatButtonModule} from '@angular/material';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//http services always fitst define in app module
import{NgxPaginationModule} from 'ngx-pagination';
import { LoadingModule } from 'ngx-loading';

const routes: Routes = [
  {path:'home',component:HomeComponent,pathMatch:'full'},
  // alwyas login pass is accessed first root is not accessed.
  {path:'country/:count',component:CountryComponent},
  {path:'view/:countryName',component:CountryViewComponent},
  {path:'*',component:HomeComponent},
  {path:'**',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];
@NgModule({
  
  declarations: [
    AppComponent,
    CountryComponent,
    CountryViewComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    LoadingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,                                                                             NgxPaginationModule,                   
    MatButtonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes, {
          onSameUrlNavigation: 'reload'
        })
    
  ],

  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }