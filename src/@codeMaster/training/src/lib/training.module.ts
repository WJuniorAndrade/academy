import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackTrainingRoutingModule } from './modules/back-training/back-training-routing.module';
import { BackTrainingModule } from './modules/back-training/back-training.module';
import { BackTrainingService } from './service/back-training.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BackTrainingModule,
    BackTrainingRoutingModule
  ],
  providers:[
    BackTrainingService
  ]
})
export class TrainingModule { }
