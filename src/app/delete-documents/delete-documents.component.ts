import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-delete-document',
  templateUrl: './delete-document.component.html',
  styleUrls: ['./delete-document.component.scss']
})
export class DeleteDocumentComponent implements OnInit {
  documentId: any;
  documentDetail: any = [];

  constructor(
    private route: ActivatedRoute,
    private httpProvider: HttpProviderService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.documentId = this.route.snapshot.params['documentId'];
    this.getDocumentDetailById();
  }

  getDocumentDetailById() {
    this.httpProvider.getDocumentDetailById(this.documentId).subscribe(
      (data: any) => {
        if (data != null && data.body != null) {
          const resultData = data.body;
          if (resultData) {
            this.documentDetail = resultData;
          }
        }
      },
      (error: any) => {
        this.toastr.error('Error fetching document details.');
      }
    );
  }

  deleteDocument() {
    this.httpProvider.deleteDocument(this.documentId).subscribe(
      (data: any) => {
        if (data != null && data.body != null && data.body.isSuccess) {
          this.toastr.success('Document deleted successfully');
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        } else {
          this.toastr.error('Failed to delete document');
        }
      },
      (error: any) => {
        this.toastr.error('Error deleting document.');
      }
    );
  }
}
