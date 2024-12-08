import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSignersComponent } from './view-signers.component';

describe('ViewSignersComponent', () => {
  let component: ViewSignersComponent;
  let fixture: ComponentFixture<ViewSignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSignersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
