import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, SubscriptionLike } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAction } from '../../redux/combiner';
import { getConfirmIsFetch, getConfirmUrl } from '../../redux/confirm/selectors';
import { IConfirmReducer } from '../../redux/confirm/reducer';
import { RDX_CONFIRM_FETCH } from 'src/app/redux/confirm/actions';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, OnDestroy {
  isFetch: Observable<boolean>;
  url: string;
  urlSub: SubscriptionLike;
  confirmation: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.confirmation = '';
    this.isFetch = this.store.select(getConfirmIsFetch);
    this.url = '';
    this.urlSub = this.store.select(getConfirmUrl).subscribe(res => this.url = res);
   }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      this.store.dispatch<IAction<any>>({
        type: RDX_CONFIRM_FETCH,
        payload: res.get('token')!,
        component: 'sell-account'
      });
    });
  }
  onboard() {
    window.location.href = this.url;
  }
  ngOnDestroy(): void {
    this.urlSub.unsubscribe();
  }

}
