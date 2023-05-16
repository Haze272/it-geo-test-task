import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {NotesService} from "../../services/notes.service";
import {Note} from "../../models/note.model";

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnInit {
  id!: number;
  note!: Note;
  isEditModeEnabled: boolean = false;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private notesService: NotesService
  ) {
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((params: ParamMap) => {
      this.isEditModeEnabled = false;
      console.log(params.get('id'))
      this.id = Number(params.get('id'))

      const foundNote = this.notesService.getNoteById(this.id);
      if (foundNote) {
        this.note = foundNote;
      } else {
        this.note = {
          id: 0,
          header: 'N/A',
          content: 'N/A',
          dateCreated: new Date()
        }
      }
    });
  }

  saveEdited() {
    this.isEditModeEnabled=!this.isEditModeEnabled;
    this.notesService.updateNote(this.note);
  }

  deleteNote() {
    this.notesService.deleteNote(this.note.id);
    this.router.navigate(['']);
  }

}
