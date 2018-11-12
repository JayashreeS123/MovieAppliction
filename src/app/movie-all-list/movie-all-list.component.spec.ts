import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAllListComponent } from './movie-all-list.component';

describe('MovieAllListComponent', () => {
  let component: MovieAllListComponent;
  let fixture: ComponentFixture<MovieAllListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAllListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
