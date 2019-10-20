import { TestBed, async } from '@angular/core/testing';
import { MyComponent } from './my.component';
import { colorValues } from 'src/assets/rgbcolor';

describe('MyComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyComponent
      ],
    }).compileComponents();
  }));

  it('has header', () => {
    const markup = getCompiledMarkup();
    expect(markup.querySelector('h1').textContent).toContain('Hello World!');
  });

  it('header is pink', () => {
    const markup = getCompiledMarkup();
    expect(colorValues(getComputedStyle(markup.querySelector('h1')).color)).toEqual(colorValues('deeppink'));
  });


  it('add table with 4 cells', () => {
    /***
     * Add table to the component, with exactly 4 cells
     * CSS Selectors: https://www.w3schools.com/cssref/css_selectors.asp
     */
    const markup = getCompiledMarkup();
    expect(markup.querySelectorAll('table tr td').length).toEqual(4, 'number of nested td elements');
    expect(markup.querySelectorAll('table').length).toEqual(1, 'exactly one table');
    expect(markup.querySelectorAll('table:empty').length).toEqual(0, 'no empty table elements');
    expect(markup.querySelectorAll('tr:empty').length).toEqual(0, 'no empty tr elements');
  });


  const getCompiledMarkup = () => {
    const fixture = TestBed.createComponent(MyComponent);
    fixture.detectChanges();
    return fixture.debugElement.nativeElement;
  };

  const getComponentInstance = () => {
    const fixture = TestBed.createComponent(MyComponent);
    return fixture.debugElement.componentInstance;
  };

});
