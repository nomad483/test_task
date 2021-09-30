import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../types/photo";

@Pipe({
  name: "photoPipe"
})
export class PhotoPipe implements PipeTransform {
  transform(value: Photo[], albumId: number): Photo[] {
    if (albumId === 0) {
      return value
    }

    return value.filter(el => el.albumId === albumId)
  }

}
