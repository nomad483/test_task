import { Component, Inject, OnInit} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'modal-box',
  styleUrls: ['./modal.component.scss'],
  template: `
    <div class="modal-dialog">
      <img [src]="modalImg" alt="">
      <div class="close-button" (click)="closeDialog()"></div>
    </div>
  `
})
export class ModalComponent implements OnInit {
  modalImg = ''

  constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string }, public dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.modalImg = this.data.url
  }
}
