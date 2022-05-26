import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { empty, Observable } from 'rxjs';
import { IAction } from 'src/app/redux/combiner';
import { RDX_MAIN_SELL_DELETE_FETCH } from 'src/app/redux/main-sell-delete/actions';
import { IMainSellDeleteFetch } from 'src/app/redux/main-sell-delete/interfaces';
import { getMainSellDeleteIsFetch, getMainSellDeleteIsFetchError, getMainSellDeleteIsFetchSuccess } from 'src/app/redux/main-sell-delete/selectors';

@Component({
  selector: 'app-main-sell-delete',
  templateUrl: './main-sell-delete.component.html',
  styleUrls: ['./main-sell-delete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSellDeleteComponent implements OnInit, AfterViewInit {
  @Input() ischindeschex: number | undefined;
  @Input() sell: string | undefined;
  isFetch: Observable<boolean | undefined>;
  isFetchSuccess: Observable<boolean | undefined>;
  isFetchError: Observable<boolean | undefined>;

  constructor(
    private store: Store
  ) {
    this.isFetch = empty();
    this.isFetchSuccess = empty();
    this.isFetchError = empty()
   }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.isFetch = this.store.select(getMainSellDeleteIsFetch(this.ischindeschex!));
    this.isFetchSuccess = this.store.select(getMainSellDeleteIsFetchSuccess(this.ischindeschex!));
    this.isFetchError = this.store.select(getMainSellDeleteIsFetchError(this.ischindeschex!));
  }
  cancel() {
    this.store.dispatch<IAction<IMainSellDeleteFetch>>({
      type: RDX_MAIN_SELL_DELETE_FETCH,
      payload: {
        index: this.ischindeschex!,
        sell: this.sell!
      },
      component: 'main-sell-delete'
    });
  }

}
