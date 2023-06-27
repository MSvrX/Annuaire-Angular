import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'',component:ListeContactComponent}
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
