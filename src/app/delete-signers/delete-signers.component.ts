import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-delete-signer',
  templateUrl: './delete-signer.component.html',
  styleUrls: ['./delete-signer.component.scss']
})
export class DeleteSignerComponent implements OnInit {
  signerId: any;
  signerDetail: any = [];

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
          this.signerDetail = data.body;
        }
      },
      (error: any) => {
        this.toastr.error('Error fetching signer details');
      }
    );
  }

  deleteSigner() {
    this.httpProvider.deleteSigner(this.signerId).subscribe(
      (data: any) => {
        if (data != null && data.body != null && data.body.isSuccess) {
          this.toastr.success('Signer deleted successfully');
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        } else {
          this.toastr.error('Failed to delete signer');
        }
      },
      (error: any) => {
        this.toastr.error('Error deleting signer');
      }
    );
  }
}
