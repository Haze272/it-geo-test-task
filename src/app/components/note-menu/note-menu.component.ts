import { Component } from '@angular/core';
import {NotesService} from "../../services/notes.service";
import {Note} from "../../models/note.model";

@Component({
  selector: 'app-note-menu',
  templateUrl: './note-menu.component.html',
  styleUrls: ['./note-menu.component.scss']
})
export class NoteMenuComponent {
  noteList: Note[] = [
    {
      id: 1,
      header: "Заголовок заметки 1",
      content: "Lorem ipsum dolor sit amet",
      dateCreated: new Date()
    },
    {
      id: 2,
      header: "Заголовок заметки 2",
      content: "Lorem ipsum dolor sit amet",
      dateCreated: new Date()
    },
    {
      id: 3,
      header: "Заголовок заметки 3",
      content: "Lorem ipsum dolor sit amet",
      dateCreated: new Date()
    },
  ];
  constructor(notesService: NotesService) {
  }

}
