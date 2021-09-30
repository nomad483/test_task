import { Component, OnInit } from '@angular/core'
import { PhotoService } from "./services/photo.service"
import { MatDialog } from '@angular/material/dialog'
import { ModalComponent } from "./components/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sohanet test task'

  public loading = true
  public page = 1
  public itemsPerPage = 30
  public selectedAlbumId = 0

  constructor(public photoService: PhotoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.photoService.get().subscribe(() => {
      this.loading = false
    })
  }

  openDialog(url: string) {
    this.dialog.open(ModalComponent, {
      data: {
        url: url,
      }
    })
  }

  selectChange(albumId: number) {
    if (albumId > 0) {

    }
  }
}
