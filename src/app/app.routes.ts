import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDocumentsComponent } from './app/documents/add-documents/add-documents.component';
import { DeleteDocumentsComponent } from './app/documents/delete-documents/delete-documents.component';
import { EditDocumentsComponent } from './app/documents/edit-documents/edit-documents.component';
import { ViewDocumentsComponent } from './app/documents/view-documents/view-documents.component';
import { HomeComponent } from './app/home/home.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'add-documents', component: AddDocumentsComponent },
    { path: 'delete-documents/:documentId', component: DeleteDocumentsComponent },
    { path: 'edit-documents/:documentId', component: EditDocumentsComponent },
    { path: 'view-documents/:documentId', component: ViewDocumentsComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }