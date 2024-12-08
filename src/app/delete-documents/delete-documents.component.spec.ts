import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDocumentsComponent } from './delete-documents.component';

describe('DeleteDocumentsComponent', () => {
  let component: DeleteDocumentsComponent;
  let fixture: ComponentFixture<DeleteDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
