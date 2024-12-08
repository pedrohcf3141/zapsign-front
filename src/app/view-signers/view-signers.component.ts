import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-view-signer',
  templateUrl: './view-signer.component.html',
  styleUrls: ['./view-signer.component.scss']
})
export class ViewSignerComponent implements OnInit {
  signerId: any;
  signerDetail: any = {};

  constructor(
    private route: ActivatedRoute,
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
        console.error('Error fetching signer details', error);
      }
    );
  }
}
