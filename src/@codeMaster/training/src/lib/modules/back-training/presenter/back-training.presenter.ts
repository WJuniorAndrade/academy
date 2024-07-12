import { BehaviorSubject, Observable } from 'rxjs';
import { BackTrainingInterface } from '../../../interface/back-training.interface';

export class BackTrainingPresenter{

  private _backTraining: BehaviorSubject<BackTrainingInterface[] | any> = new BehaviorSubject(null);

  readonly backTraining$: Observable<BackTrainingInterface[]> = this._backTraining.asObservable();
  



  getBackTraining(data: BackTrainingInterface){
    this._backTraining.next(data);
  }
}
