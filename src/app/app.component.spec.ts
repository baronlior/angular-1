import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyComponent } from './my-module/my-component/my.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MyComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const component = getComponentInstance();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular1'`, () => {
    const component = getComponentInstance();
    expect(component.title).toEqual('the root component');
  });

  const getComponentInstance = () => {
    const fixture = TestBed.createComponent(AppComponent);
    return fixture.debugElement.componentInstance;
  };

});
