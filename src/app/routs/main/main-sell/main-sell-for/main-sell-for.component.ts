import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { empty, Observable } from 'rxjs';
import { MyErrorStateMatcher } from 'src/app/error-state-matcher';
import { IAction } from 'src/app/redux/combiner';
import { RDX_MAIN_SELL_FOR_FETCH } from 'src/app/redux/main-sell-for/actions';
import { getMainSellForIsFetch, getMainSellForIsFetchSuccess } from 'src/app/redux/main-sell-for/selectors';

@Component({
  selector: 'app-main-sell-for',
  templateUrl: './main-sell-for.component.html',
  styleUrls: ['./main-sell-for.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSellForComponent implements OnInit, AfterViewInit {
  @Input() ischindeschex: number | undefined;
  @Input() liber: boolean | undefined;
  isFetch: Observable<boolean>;
  isFetchSuccess: Observable<boolean>;
  price: number;
  priceFormControl: FormControl;
  errorStateMatcher: MyErrorStateMatcher;
   constructor(
    private store: Store
  ) {
    this.price = 0;
    this.isFetch = empty();
    this.isFetchSuccess = empty();
    this.priceFormControl = new FormControl('', [
      Validators.required
    ]);
    this.errorStateMatcher = new MyErrorStateMatcher();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.isFetch = this.store.select(getMainSellForIsFetch(this.ischindeschex!));
    this.isFetchSuccess = this.store.select(getMainSellForIsFetchSuccess(this.ischindeschex!));
  }
  activate() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_SELL_FOR_FETCH,
      payload: {
        index: this.ischindeschex!,
        price: this.price,
      },
      component: 'main-sell-for'
    });
  }

}
