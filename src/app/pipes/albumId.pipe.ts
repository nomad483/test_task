import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../types/photo";

@Pipe({
  name: "albumIdPipe"
})
export class AlbumIdPipe implements PipeTransform {
  array: number[] = []

  transform(value: Photo[], ...args: any[]): any {
    value.forEach(el => {
      if (this.array.indexOf(el.albumId)  === -1) {
        this.array.push(el.albumId);
      }
    })

    return this.array
  }
}
