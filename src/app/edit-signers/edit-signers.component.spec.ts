import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSignersComponent } from './edit-signers.component';

describe('EditSignersComponent', () => {
  let component: EditSignersComponent;
  let fixture: ComponentFixture<EditSignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSignersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
