import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackTrainingComponent } from './view/back-training/back-training.component';
import { BackTrainingContainer } from './back-training.container';
import { BackTrainingRoutingModule } from './back-training-routing.module';
import { BackTrainingPresenter } from './presenter/back-training.presenter';



@NgModule({
  declarations: [
    BackTrainingComponent,
    BackTrainingContainer
  ],
  imports: [
    CommonModule,
    BackTrainingRoutingModule
    
  ],
  exports: [
    BackTrainingComponent,
    BackTrainingContainer
  ],
  providers:[
    BackTrainingPresenter
  ]
})
export class BackTrainingModule { }
