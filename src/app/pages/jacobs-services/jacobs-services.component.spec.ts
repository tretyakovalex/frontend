import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacobsServicesComponent } from './jacobs-services.component';

describe('JacobsServicesComponent', () => {
  let component: JacobsServicesComponent;
  let fixture: ComponentFixture<JacobsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacobsServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JacobsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
