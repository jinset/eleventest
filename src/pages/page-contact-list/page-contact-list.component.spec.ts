import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactListComponent } from './page-contact-list.component';

describe('PageContactListComponent', () => {
  let component: PageContactListComponent;
  let fixture: ComponentFixture<PageContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
