import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JstoreComponent } from './jstore.component';

describe('JstoreComponent', () => {
  let component: JstoreComponent;
  let fixture: ComponentFixture<JstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
