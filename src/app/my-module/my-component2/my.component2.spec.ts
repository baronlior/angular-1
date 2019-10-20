import { TestBed, async } from '@angular/core/testing';
import { colorValues } from 'src/assets/rgbcolor';
import { MyComponent2 } from './my.component2';

describe('MyComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyComponent2
      ],
    }).compileComponents();
  }));

  it('add hello world header', () => {
    /***
     * Add an header 1 HTML element to the component, saying "Hello World!"
     */
    const markup = getCompiledMarkup();
    expect(markup.querySelector('h1').textContent).toContain('Hello World!');
  });

  it('add first color', () => {
    /***
     * Use the Style sheet (.scss file) to set the color of the header to pink.
     * NO... wait. deeppink.
     */
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

  it('add borders to the table', () => {
    /***
     * Add borders (of any colors you like) to the table
     * Reference: https://www.w3schools.com/cssref/pr_border.asp
     */
    const markup = getCompiledMarkup();
    expect(getComputedStyle(markup.querySelector('table')).border).toContain('px', 'table border should have some width');
    expect(getComputedStyle(markup.querySelector('td')).border).toContain('px', 'cell border should have some width');
  });

  const getCompiledMarkup = () => {
    const fixture = TestBed.createComponent(MyComponent2);
    fixture.detectChanges();
    return fixture.debugElement.nativeElement;
  };

  const getComponentInstance = () => {
    const fixture = TestBed.createComponent(MyComponent2);
    return fixture.debugElement.componentInstance;
  };

});
