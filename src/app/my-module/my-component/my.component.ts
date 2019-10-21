import { Component, OnDestroy, OnInit } from '@angular/core';
import { CobService } from '../../services/cob.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit, OnDestroy {

  private cobs: Map<number, string>; // id , cob
  private cobSub: Subscription;
  private errorStatus: string = null;

  constructor(private cobService: CobService) {}

  ngOnInit() {
    this.cobSub = this.cobService.getCobMap$()
      .subscribe({
        next: cobs => { this.cobs = cobs; },
        error: _ => this.errorStatus = 'error loading data from the server'
      });
  }

  getCobKeys() {
    return Array.from(this.cobs.keys());
  }

  ngOnDestroy(): void {
    this.cobSub.unsubscribe();
  }

}

