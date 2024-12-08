import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.scss']
})

export class ViewDocumentComponent implements OnInit {

  documentId: any;
  documentDetail: any = [];

  constructor(private route: ActivatedRoute, private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.documentId = this.route.snapshot.params['documentId'];
    this.getDocumentDetailById();
  }

  getDocumentDetailById() {
    this.httpProvider.getDocumentDetailById(this.documentId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.documentDetail = resultData;
        }
      }
    },
    (error: any) => { });
  }
}
