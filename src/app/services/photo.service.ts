import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Photo } from "../types/photo";

@Injectable({ providedIn: 'root' })
export class PhotoService {
  public photos: Photo[] = []

  constructor(private http: HttpClient) { }

  get(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos?')
      .pipe(tap(data => this.photos = data))
  }

  deletePhoto(id: number) {
    this.photos = this.photos.filter(photo => photo.id !== id)
  }
}
