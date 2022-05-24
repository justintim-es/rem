import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAction } from 'src/app/redux/combiner';
import { RDX_ONBOARD_FAIL_FETCH } from 'src/app/redux/onboard-fail/actions';
import { getOnboardFailIsFetch, getOnboardFailUrl } from 'src/app/redux/onboard-fail/selectors';

@Component({
  selector: 'app-onboard-fail',
  templateUrl: './onboard-fail.component.html',
  styleUrls: ['./onboard-fail.component.css']
})
export class OnboardFailComponent implements OnInit {
  isFetch: Observable<boolean>;
  urlSub: SubscriptionLike;
  url: string;
  activatedRouteSub: SubscriptionLike;
  confirmation: string;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
    this.url = '';
    this.isFetch = this.store.select(getOnboardFailIsFetch);
    this.urlSub = this.store.select(getOnboardFailUrl).subscribe(res => this.url = res);
    this.confirmation = '';
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.confirmation = res.get('token')!;
    })

   }

  ngOnInit(): void {
    this.store.dispatch<IAction<any>>({
      type: RDX_ONBOARD_FAIL_FETCH,
      payload: this.confirmation,
      component: 'onboard-fail'
    });
  }
  try() {
    window.location.href = this.url;
  }

}
