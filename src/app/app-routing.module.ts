import { ChekoutComponent } from './components/chekout/chekout.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
  ,{
    path:'test',
    component:TestComponent
  },
  {
    path:'chekout',
    component:ChekoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
