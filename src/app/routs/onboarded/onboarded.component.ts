import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { IAction } from 'src/app/redux/combiner';
import { RDX_ONBOARD_FETCH } from 'src/app/redux/onboard/actions';
import { getOnboardIsFetch, getOnboardIsFetchError, getOnboardIsFetchSuccess } from 'src/app/redux/onboard/selectors';

@Component({
  selector: 'app-onboarded',
  templateUrl: './onboarded.component.html',
  styleUrls: ['./onboarded.component.css']
})
export class OnboardedComponent implements OnInit {
  activatedRouteSub: SubscriptionLike;
  isFetch: Observable<boolean>;
  isFetchSuccessSub: SubscriptionLike;
  isFetchError: Observable<boolean>;
  constructor(
    private router: Router,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRouteSub = this.activatedRoute.paramMap.subscribe(res => {
      this.store.dispatch<IAction<any>>({
        type: RDX_ONBOARD_FETCH,
        payload: res.get('token')!,
        component: 'onboarded'
      })
    });
    this.isFetch = this.store.select(getOnboardIsFetch);
    this.isFetchSuccessSub = this.store.select(getOnboardIsFetchSuccess).subscribe(res => {
      if (res) {
        this.router.navigate(['/login']);
      }
    });
    this.isFetchError = this.store.select(getOnboardIsFetchError);
   }

  ngOnInit(): void {
    
  }

}
