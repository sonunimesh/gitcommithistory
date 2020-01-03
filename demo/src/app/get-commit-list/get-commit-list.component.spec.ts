import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommitListComponent } from './get-commit-list.component';

describe('GetCommitListComponent', () => {
  let component: GetCommitListComponent;
  let fixture: ComponentFixture<GetCommitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCommitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCommitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
