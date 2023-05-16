import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotesService} from "../../services/notes.service";
import {Note} from "../../models/note.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-note-menu',
  templateUrl: './note-menu.component.html',
  styleUrls: ['./note-menu.component.scss']
})
export class NoteMenuComponent implements OnInit, OnDestroy{
  noteList: Note[] = [];
  noteListSub!: Subscription;
  isClosed: boolean = false;

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.noteListSub = this.notesService.getNotes().subscribe((data: Note[]) => {
      this.noteList = data;
      console.log('Change detected', data)
    })
  }

  addNote() {
    this.notesService.addNote()
  }

  ngOnDestroy() {
    this.noteListSub.unsubscribe();
  }

  onToggledMenu($event: boolean) {
    this.isClosed = $event;
  }

}
