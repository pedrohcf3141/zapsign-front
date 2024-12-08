import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-add-signer',
  templateUrl: './add-signer.component.html',
  styleUrls: ['./add-signer.component.scss']
})
export class AddSignerComponent implements OnInit {
  addSignerForm: SignerForm = new SignerForm();
  documentId: any;
  isSubmitted: boolean = false;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private httpProvider: HttpProviderService
  ) {}

  ngOnInit(): void {
    this.documentId = this.route.snapshot.params['documentId'];
  }

  addSigner(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.addSignerForm.document = this.documentId;
      this.httpProvider.addSigner(this.addSignerForm).subscribe(
        (data: any) => {
          if (data != null && data.body != null && data.body.isSuccess) {
            this.toastr.success('Signer added successfully');
            setTimeout(() => {
              this.router.navigate(['/Home']);
            }, 500);
          } else {
            this.toastr.error('Failed to add signer');
          }
        },
        (error: any) => {
          this.toastr.error('Error adding signer');
        }
      );
    }
  }
}

export class SignerForm {
  name: string = '';
  email: string = '';
  status: string = '';
  token: string = '';
  document!: number;
}
