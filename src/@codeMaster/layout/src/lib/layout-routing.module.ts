import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainer } from './modules/home/home.container';

export const routes: Routes = [
  /* {
    path: '',
    title: 'Home',
    component: HomeContainer
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
