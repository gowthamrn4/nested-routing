import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { LandpageComponent} from '../landpage/landpage.component';
import { EducationComponent } from './education.component';
import { CollageComponent} from './collage/collage.component';
import { SchoolComponent } from './school/school.component';
import { ClgdetailComponent} from './collage/clgdetail/clgdetail.component';
import { MarkComponent } from './collage/mark/mark.component';
import { AddComponent } from './collage/add/add.component';
@NgModule({
    declarations: [
     EducationComponent,
     CollageComponent,
     SchoolComponent,
     ClgdetailComponent,
     MarkComponent,
     AddComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      CommonModule,
      RouterModule.forRoot([
        {path:'',pathMatch:'full',redirectTo:'landpage'},
        {path:'landpage',component:LandpageComponent,
      children:([
        {path:'education',component:EducationComponent,
        children:([
          {path:'collage',component:CollageComponent,
        children:([
          {path:'',pathMatch:'full',redirectTo:'clgdetail'},
          {path:'clgdetail',component:ClgdetailComponent},
          {path:'mark',component:MarkComponent},
          {path:'add',component:AddComponent}
        ])},
          {path:'school',component:SchoolComponent}
        ])},
      ])}
       
      // {path:'collage',component:CollageComponent},
      // {path:'school',component:SchoolComponent}
      
      ])
    ],
    providers: [],
    bootstrap: [EducationComponent]
  })
  export class EduAppModule { }
  