import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AddDocumentsComponent } from './app/documents/add-documents/add-documents.component';
import { DeleteDocumentsComponent } from './app/documents/delete-documents/delete-documents.component';
import { DocumentsComponent } from './app/documents/documents.component';
import { EditDocumentsComponent } from './app/documents/edit-documents/edit-documents.component';
import { ViewDocumentsComponent } from './app/documents/view-documents/view-documents.component';
import { AddSignersComponent } from './app/signers/add-signers/add-signers.component';
import { DeleteSignersComponent } from './app/signers/delete-signers/delete-signers.component';
import { EditSignersComponent } from './app/signers/edit-signers/edit-signers.component';
import { SignersComponent } from './app/signers/signers.component';
import { ViewSignersComponent } from './app/signers/view-signers/view-signers.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    AddDocumentsComponent,
    EditDocumentsComponent,
    DeleteDocumentsComponent,
    ViewDocumentsComponent,
    SignersComponent,
    AddSignersComponent,
    EditSignersComponent,
    DeleteSignersComponent,
    ViewSignersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
