import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { empty, Observable, SubscriptionLike } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction, IMainSellIschinFetch } from 'src/app/redux/combiner';
import { RDX_MAIN_SELL_ISCHIN_FETCH, RDX_MAIN_SELL_ISCHIN_PUSH } from 'src/app/redux/main-sell-ischin/actions';
import { getMainSellIschinIsTransferFetch, getMainSellIschinIsTransferFetchError, getMainSellIschinIsTransferFetchSuccess, getMainSellIschinTransferFetchErrorMessage } from 'src/app/redux/main-sell-ischin/selectors';
import { getMainSellFetchErrorMessage, getMainSellIsFetch, getMainSellIsFetchError, getMainSellIsFetchSuccess } from 'src/app/redux/main-sell/selectors';
import { IUnitGla } from 'src/app/redux/unit/reducer';
import { getUnitGla } from 'src/app/redux/unit/selectors';

@Component({
  selector: 'app-ischin',
  templateUrl: './ischin.component.html',
  styleUrls: ['./ischin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IschinComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() ischindeschex: number | undefined;
  @Input() public: string | undefined;
  @Input() ischid: string | undefined;
  units: Observable<IUnitGla[]>;

  unitFormControl: FormControl;
  unit: string;
  amountFormControl: FormControl;
  amount: string;
  priceFormControl: FormControl;
  price: number;
  errorStateMatcher: MyErrorStateMatcher;

  isFetch: Observable<boolean | undefined>;
  isFetchSuccess: SubscriptionLike | undefined;
  isFetchError: SubscriptionLike | undefined;
  fetchErrorMessage: Observable<String | undefined>;

  constructor(
    private store: Store
  ) {
    this.units = this.store.select(getUnitGla);
    this.unitFormControl = new FormControl('', [
      Validators.required
    ]);
    this.unit = '';
    this.amountFormControl = new FormControl('', [
      Validators.required,
      Validators.max(1000000000000000000000000000000000000000000)
    ])
    this.amount = '';
    this.priceFormControl = new FormControl('', [
      Validators.required
    ]);
    this.price = 0;
    this.errorStateMatcher = new MyErrorStateMatcher();
    this.isFetch = empty();
    this.fetchErrorMessage = empty();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.isFetch = this.store.select(getMainSellIschinIsTransferFetch(this.ischindeschex!));
    this.isFetchSuccess = this.store.select(getMainSellIschinIsTransferFetchSuccess(this.ischindeschex!)).subscribe(res => {
      if (res) {
        this.amountFormControl = new FormControl('', [
          Validators.required
        ]);
        this.priceFormControl = new FormControl('', [
          Validators.required
        ])
      }
    })
    this.isFetchError = this.store.select(getMainSellIschinIsTransferFetchError(this.ischindeschex!)).subscribe(res => {
      if (res) {
        this.unitFormControl.setErrors({ backend: true })
        this.amountFormControl.setErrors({ backend: true });
        this.priceFormControl.setErrors({ backend: true });
      }
    this.fetchErrorMessage = this.store.select(getMainSellIschinTransferFetchErrorMessage(this.ischindeschex!));
    })
  }
  submit() {
    this.store.dispatch<IAction<IMainSellIschinFetch>>({
      type: RDX_MAIN_SELL_ISCHIN_FETCH,
      payload: {
        index: this.ischindeschex!,
        gla: this.amount,
        to: this.public!,
        unit: this.unit,
        ischid: this.ischid!
      },
      component:  'main-sell-ischin'
    });
  }
  ngOnDestroy(): void {
    this.isFetchSuccess?.unsubscribe();
    this.isFetchError?.unsubscribe();
  }

}
