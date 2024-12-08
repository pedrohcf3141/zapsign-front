import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSignersComponent } from './delete-signers.component';

describe('DeleteSignersComponent', () => {
  let component: DeleteSignersComponent;
  let fixture: ComponentFixture<DeleteSignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSignersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
