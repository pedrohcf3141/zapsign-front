import { Component } from '@angular/core';

@Component({
  selector: 'app-add-documents',
  imports: [],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.scss'
})
export class AddDocumentsComponent {

}

export class AddDocumentComponent implements OnInit {
  addDocumentForm: DocumentForm = new DocumentForm();

  @ViewChild("DocumentForm")
  DocumentForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {  }

  AddDocument(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveDocument(this.addDocumentForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
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
  token: string = "";
  name: string = "";
  status: string = "";
  company: string = "";
}