import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8000/";

var httpLink = {
  getAllDocument: apiUrl + "/api/document/getAllDocument",
  deleteDocumentById: apiUrl + "/api/document/deleteDocumentById",
  getDocumentDetailById: apiUrl + "/api/document/getDocumentDetailById",
  saveDocument: apiUrl + "/api/document/saveDocument"
}

@Injectable({
  providedIn: 'root'
})

export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllDocument(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }
  public deleteDocumentById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?documentId=' + model, "");
  }
  public getDocumentDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + '?documentId=' + model);
  }
  public saveDocument(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }  
}
