import { Component, OnInit } from '@angular/core';
import { CobService } from '../../services/cob.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'my-component2',
  templateUrl: './my.component2.html',
  styleUrls: ['./my.component2.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class MyComponent2 implements OnInit {

  private cobs$: Observable<string | Map<number, string>>;
  private errorStatus: string = null;

  constructor(private cobService: CobService) {}

  ngOnInit() {
    this.cobs$ = this.cobService.getCobMap$().pipe(
      catchError(_ => this.errorStatus = 'error loading data from the server')
    );
  }

  orderByKey = (k, v) => v;

}

