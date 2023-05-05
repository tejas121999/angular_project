import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

const routes: Routes = [
  {
    component: HomepageComponent,
    path: 'home-page'
  },
  {
    component: SecondpageComponent,
    path: 'second-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
