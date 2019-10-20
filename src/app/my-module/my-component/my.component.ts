import { Component, OnDestroy, OnInit } from '@angular/core';
import { CobService } from '../../services/cob.service';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

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
      .pipe(delay(0))
      .subscribe({
        next: cobs => { console.log(Array.from(cobs.entries())); this.cobs = cobs; console.log(this.cobs); },
        error: _ => this.errorStatus = 'error loading data from the server'
      });
  }

  ngOnDestroy(): void {
    this.cobSub.unsubscribe();
  }

}

