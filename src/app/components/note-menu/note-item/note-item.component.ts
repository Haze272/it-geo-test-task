import {Component, Input} from '@angular/core';
import {NotesService} from "../../../services/notes.service";
import {Note} from "../../../models/note.model";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent {
  @Input() note: Note | undefined;
  constructor(private notesService: NotesService) {
  }

  deleteNote($event: Event) {
    $event.preventDefault();
    this.notesService.deleteNote(this.note!.id);
  }
}
