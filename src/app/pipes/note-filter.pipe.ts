import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../models/note.model";

@Pipe({
  name: 'noteFilter'
})
export class NoteFilterPipe implements PipeTransform {

  transform(notes: Note[], searchHeader: string): Note[] {
    if (!notes) {
      return [];
    }
    if (!searchHeader) {
      return notes;
    }
    searchHeader = searchHeader.toLocaleLowerCase();

    return notes.filter(note => {
      return note.header.toLocaleLowerCase().includes(searchHeader);
    })
  }

}
