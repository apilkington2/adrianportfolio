import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let heroService;
  let getHeroesSpy;

  beforeEach(async(() => {
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Heroes');
  });

  it('should call heroService', async(() => {
    expect(getHeroesSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

});
