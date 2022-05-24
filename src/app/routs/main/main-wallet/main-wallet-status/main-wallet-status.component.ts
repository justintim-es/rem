import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAction, IRationem } from 'src/app/redux/combiner';
import { RDX_MAIN_WALLET_IS_DEFENDED } from 'src/app/redux/main-wallet/actions';
import { getMainWalletIsRationem, getMainWalletRationem } from 'src/app/redux/main-wallet/selectors';

@Component({
  selector: 'app-main-wallet-status',
  templateUrl: './main-wallet-status.component.html',
  styleUrls: ['./main-wallet-status.component.css']
})
export class MainWalletStatusComponent implements OnInit {
  rationem: Observable<IRationem>;
  isRationem: Observable<boolean>;
  constructor(
    private store: Store
  ) {
    this.rationem = this.store.select(getMainWalletRationem);
    this.isRationem = this.store.select(getMainWalletIsRationem);
  }

  ngOnInit(): void {
  }
  refresh() {
    this.store.dispatch<IAction<any>>({
      type: RDX_MAIN_WALLET_IS_DEFENDED,
      component: 'main-wallet-status'
    })
  }

}
