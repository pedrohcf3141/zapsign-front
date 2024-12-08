import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSignersComponent } from './add-signers.component';

describe('AddSignersComponent', () => {
  let component: AddSignersComponent;
  let fixture: ComponentFixture<AddSignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSignersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
