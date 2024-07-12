import { Component, OnInit } from '@angular/core';
import { BackTrainingPresenter } from '../../presenter/back-training.presenter';
import { SubSink } from 'SubSink';
import { BackTrainingInterface } from '../../../../interface/back-training.interface';

@Component({
  selector: 'back-training',
  templateUrl: './back-training.component.html',
  styleUrls: ['./back-training.component.scss']
})
export class BackTrainingComponent implements OnInit {

  private subSink = new SubSink;
  public backTrainings!: BackTrainingInterface[];

  constructor(
    private presenter: BackTrainingPresenter
  ) { }

  ngOnInit(): void {
    this.presenterSubscriptions();
  }
  
  presenterSubscriptions(){
    this.subSink.add(
      this.presenter.backTraining$.subscribe((res) =>{
        console.log('------------------');
        console.log({ component: res });
        console.log('------------------');
        this.backTrainings = res
      })
    )
  }
  
  ngOnDestroy(){
    this.subSink.unsubscribe();
  }


}
