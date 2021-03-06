import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { SkillsetsComponent } from './skillsets/skillsets.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: "",
    component: IntroComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "skillsets",
    component: SkillsetsComponent,
  },
  {
    path: "works",
    component: WorksComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
