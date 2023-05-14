import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NotesService} from "../../services/notes.service";

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent {
  id: number;
  constructor(
    private activateRoute: ActivatedRoute,
    private notesServices: NotesService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

}
