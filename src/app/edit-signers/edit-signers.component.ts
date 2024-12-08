import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-signer',
  templateUrl: './edit-signer.component.html',
  styleUrls: ['./edit-signer.component.scss']
})
export class EditSignerComponent implements OnInit {
  signerId: any;
  editSignerForm: SignerForm = new SignerForm();
  isSubmitted: boolean = false;

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private httpProvider: HttpProviderService
  ) {}

  ngOnInit(): void {
    this.signerId = this.route.snapshot.params['signerId'];
    this.getSignerDetail();
  }

  getSignerDetail() {
    this.httpProvider.getSignerById(this.signerId).subscribe(
      (data: any) => {
        if (data != null && data.body != null) {
          this.editSignerForm = data.body;
        }
      },
      (error: any) => {
        this.toastr.error('Error fetching signer details');
      }
    );
  }

  editSigner(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.updateSigner(this.signerId, this.editSignerForm).subscribe(
        (data: any) => {
          if (data != null && data.body != null && data.body.isSuccess) {
            this.toastr.success('Signer updated successfully');
            setTimeout(() => {
              this.router.navigate(['/Home']);
            }, 500);
          } else {
            this.toastr.error('Failed to update signer');
          }
        },
        (error: any) => {
          this.toastr.error('Error updating signer');
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
