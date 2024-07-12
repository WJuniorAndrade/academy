import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackTrainingContainer } from './modules/back-training/back-training.container';

export const routes: Routes = [
  {
  path: '',
  title: 'Treino de perna',
  component: BackTrainingContainer
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
