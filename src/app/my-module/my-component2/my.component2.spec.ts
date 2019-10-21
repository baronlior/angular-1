import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { colorValues } from 'src/assets/rgbcolor';
import { MyComponent2 } from './my.component2';
import { CobService } from '../../services/cob.service';
import { Observable, of } from 'rxjs';


describe('MyComponent2', () => {
  let component: MyComponent2;
  let fixture: ComponentFixture<MyComponent2>;
  let rootElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyComponent2
      ],
      providers: [
        {provide: CobService, useClass: CobServiceMock}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rootElement = fixture.debugElement.nativeElement;
  });

  it('has header', () => {
    expect(rootElement.querySelector('h1').textContent).toContain('Hello World!');
  });

  it('header is pink', () => {
    expect(colorValues(getComputedStyle(rootElement.querySelector('h1')).color)).toEqual(colorValues('deeppink'));
  });

  it('table with 4 cells', async () => {
    expect(rootElement.querySelectorAll('table tr td').length).toEqual(4, 'number of nested td elements');
    expect(rootElement.querySelectorAll('table').length).toEqual(1, 'exactly one table');
    expect(rootElement.querySelectorAll('table:empty').length).toEqual(0, 'no empty table elements');
    expect(rootElement.querySelectorAll('tr:empty').length).toEqual(0, 'no empty tr elements');
  });

});


class CobServiceMock {
  // noinspection JSUnusedGlobalSymbols
  getCobMap$(): Observable<Map<number, string>>  {
    return of(new Map<number, string>([[1, 'a'], [2, 'b']]));
  }
}
