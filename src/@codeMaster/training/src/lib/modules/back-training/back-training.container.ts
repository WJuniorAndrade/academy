import { Component, OnInit } from '@angular/core';
import { SubSink } from 'SubSink';
import { BackTrainingService } from '../../service/back-training.service';
import { BackTrainingPresenter } from './presenter/back-training.presenter';


@Component({
  selector: 'app-back-training.container',
  templateUrl: './back-training.container.html',
  styleUrls: ['./back-training.container.scss']
})
export class BackTrainingContainer implements OnInit {

  private subSink = new SubSink;

  constructor(
    private service: BackTrainingService,
    private presenter: BackTrainingPresenter
  ) { }

  ngOnInit(): void {
    this.serviceSubscriptions();
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }

  serviceSubscriptions(){
    this.subSink.add(
      this.service.backTraining().subscribe({
        error:(e) => {console.log(e);},
        next:(res) => {
          console.log('------------------');
          console.log({ response: res });
          console.log('------------------');
          this.presenter.getBackTraining(res);
        }
      })
    )
  }

}
