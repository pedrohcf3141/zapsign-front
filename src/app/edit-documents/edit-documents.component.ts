import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {
  editDocumentForm: DocumentForm = new DocumentForm();

  @ViewChild("documentForm")
  documentForm!: NgForm;

  isSubmitted: boolean = false;
  documentId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.documentId = this.route.snapshot.params['documentId'];
    this.getDocumentDetailById();
  }

  getDocumentDetailById() {
    this.httpProvider.getDocumentDetailById(this.documentId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editDocumentForm.open_id = resultData.open_id;
          this.editDocumentForm.name = resultData.name;
          this.editDocumentForm.token = resultData.token;
          this.editDocumentForm.status = resultData.status;
          this.editDocumentForm.company = resultData.company;
        }
      }
    },
    (error: any) => { 
      this.toastr.error('Failed to load document details');
    });
  }

  EditDocument(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveDocument(this.editDocumentForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            this.toastr.success(resultData.message);
            setTimeout(() => {
              this.router.navigate(['/Home']);
            }, 500);
          }
        }
      },
      async error => {
        this.toastr.error(error.message);
        setTimeout(() => {
          this.router.navigate(['/Home']);
        }, 500);
      });
    }
  }
}

export class DocumentForm {
  open_id: number = 0;
  name: string = "";
  token: string = "";
  status: string = "";
  company: string = "";
}
