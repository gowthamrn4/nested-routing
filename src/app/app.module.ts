import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { LandpageComponent } from './landpage/landpage.component';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { LanComponent } from './lan/lan.component';
import { AddressComponent } from './address/address.component';
import { FnameComponent } from './fname/fname.component';
import { LnameComponent } from './lname/lname.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    DetailsComponent,
    LandpageComponent,
    NameComponent,
    EmailComponent,
    LanComponent,
    AddressComponent,
    FnameComponent,
    LnameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'', pathMatch:'full',redirectTo:'landpage'},
      { path:'landpage',component:LandpageComponent,
    children:([
      { path:'',pathMatch:'full',redirectTo:'home'},
      { path:'home',component:HomeComponent},
      { path:'profile',component:ProfileComponent},
      { path:'details',component:DetailsComponent,
    children:([
      { path:'',pathMatch:'full',redirectTo:'name'},
      { path:'name',component:NameComponent,
    children:([
      { path:'fname',component:FnameComponent},
      { path:'lname',component:LnameComponent}
    ])},
      { path:'email',component:EmailComponent},
      { path:'address',component:AddressComponent},
      { path:'lan',component:LanComponent}
    ])}
   
    
    ])},
   
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
