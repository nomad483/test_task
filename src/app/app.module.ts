import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from "@angular/common/http"
import { NgxPaginationModule } from "ngx-pagination"
import { CommonModule } from "@angular/common";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog"
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { ModalComponent } from "./components/modal.component"
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { AlbumIdPipe } from "./pipes/albumId.pipe";
import { PhotoPipe } from "./pipes/photo.pipe"

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AlbumIdPipe,
    PhotoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
